export interface Argument<T> {
  type: 'string' | 'number' | 'boolean';
  hide?: boolean;
  default?: T;
  options?: T[];
}
