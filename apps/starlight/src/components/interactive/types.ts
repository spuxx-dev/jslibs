export interface Argument<T> {
  type: 'string' | 'number' | 'boolean';
  default?: T;
  options?: T[];
}
