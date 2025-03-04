export interface Argument<T> {
  type: 'string' | 'number' | 'boolean';
  options?: T[];
}
