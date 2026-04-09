import { getMetadataStorage, ValidationTypes, type ValidationOptions } from 'class-validator';
import { ValidationMetadata, type ValidationMetadataArgs } from './validation-metadata.internal';

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
  return function (object: object, propertyName: string | symbol): void {
    const args: ValidationMetadataArgs = {
      type: ValidationTypes.CONDITIONAL_VALIDATION,
      name: IS_OPTIONAL_UNLESS,
      target: object.constructor,
      propertyName: propertyName.toString(),
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
