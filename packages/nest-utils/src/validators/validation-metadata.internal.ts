// @ts-nocheck
/* eslint-disable */
import { type ValidationArguments, type ValidationOptions } from 'class-validator';

/**
 * This is a built-in type of `class-validator`. We need to replicate it here to be able to use
 * it because it's not being exported.
 */
export interface ValidationMetadataArgs {
  type: string;
  name?: string;
  target: Function | string;
  propertyName: string;
  constraintCls?: Function;
  constraints?: any[];
  validationOptions?: ValidationOptions;
  validationTypeOptions?: any;
}

/**
 * This is a built-in class of `class-validator`. We need to replicate it here to be able to use
 * it because it's not being exported.
 */
export class ValidationMetadata {
  type: string;
  name?: string;
  target: Function | string;
  propertyName: string;
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
