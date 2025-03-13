/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getMetadataStorage,
  ValidationTypes,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';

export const IS_OPTIONAL_UNLESS = 'isOptionalUnless';

/**
 * Makes a property optional unless a condition is met. The condition may take any property of the
 * object as an argument. Behaves exactly as the `IsOptional` decorator, meaning that unless the
 * condition is met all validations will be skipped.
 * See: https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators
 * @param property The property key to check against.
 * @param condition The condition.
 * @param options Additional validation options.
 * @example
 * ＠IsOptional()
 * ＠IsString()
 * foo?: string;
 *
 * ＠IsOptionalUnless('foo', (foo) => isDefined(foo))
 * ＠IsString()
 * bar?: string;
 */
export function IsOptionalUnless<T extends object, K extends keyof T>(
  property: K,
  condition: (value: T[K]) => boolean,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return function (object: object, propertyName: string): void {
    const args: ValidationMetadataArgs = {
      type: ValidationTypes.CONDITIONAL_VALIDATION,
      name: IS_OPTIONAL_UNLESS,
      target: object.constructor,
      propertyName: propertyName,
      constraints: [
        (obj: T): boolean => {
          const relatedValue = obj[property];
          return condition(relatedValue);
        },
      ],
      validationOptions: validationOptions,
    };
    getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
  };
}

/**
 * This is a built-in type of `class-validator`. We need to replicate it here to be able to use
 * it because it's not being exported.
 */
interface ValidationMetadataArgs {
  type: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Function | string;
  propertyName: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  constraintCls?: Function;
  constraints?: any[];
  validationOptions?: ValidationOptions;
  validationTypeOptions?: any;
}

/**
 * This is a built-in class of `class-validator`. We need to replicate it here to be able to use
 * it because it's not being exported.
 */
class ValidationMetadata {
  type: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Function | string;
  propertyName: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  constraintCls: Function;
  constraints: any[];
  message: string | ((args: ValidationArguments) => string);
  groups: string[] = [];
  always?: boolean;
  each: boolean = false;
  context?: any = undefined;
  validationTypeOptions: any;

  constructor(args: ValidationMetadataArgs) {
    this.type = args.type;
    this.name = args.name;
    this.target = args.target;
    this.propertyName = args.propertyName;
    this.constraints = args?.constraints;
    this.constraintCls = args.constraintCls;
    this.validationTypeOptions = args.validationTypeOptions;
    if (args.validationOptions) {
      this.message = args.validationOptions.message;
      this.groups = args.validationOptions.groups;
      this.always = args.validationOptions.always;
      this.each = args.validationOptions.each;
      this.context = args.validationOptions.context;
    }
  }
}
