import { describe, expect, it } from 'vitest';
import { isDefined, IsOptional, IsString, validateSync } from 'class-validator';
import { IsOptionalUnless } from './is-optional-unless.validator';

describe('IsOptionalUnless', () => {
  class MyClass {
    @IsOptionalUnless<MyClass, 'bar'>('bar', (bar) => isDefined(bar))
    @IsString()
    foo?: string;
    @IsOptional()
    bar?: string;
  }

  it('validation should succeed if the condition is not met and the property is undefined', () => {
    const obj = new MyClass();
    const result = validateSync(obj);
    expect(result).toEqual([]);
  });

  it('validation should succeed if the condition is not met but the property would fail another validation \
    constraint', () => {
    const obj = new MyClass();
    obj.foo = { iAm: 'anObject' } as unknown as string;
    const result = validateSync(obj);
    expect(result).toEqual([]);
  });

  it('validation should fail if the condition is met and the decorated property is not defined', () => {
    const obj = new MyClass();
    obj.bar = 'bar';
    const result = validateSync(obj);
    expect(result.length).toBe(1);
    expect(result[0].constraints).toEqual({
      isString: 'foo must be a string',
    });
  });

  it('validation should succeed if the condition is met and the decorated property meets its validation \
    constrains', () => {
    const obj = new MyClass();
    obj.foo = 'foo';
    obj.bar = 'bar';
    const result = validateSync(obj);
    expect(result).toEqual([]);
  });

  it("should skip other validators if the condition isn't met", () => {
    const obj = new MyClass();
    const result = validateSync(obj);
    expect(result).toEqual([]);
  });
});
