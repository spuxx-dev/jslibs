/**
 * The base color of an element.
 */
export const BaseColor = {
  background: 'background',
  surface: 'surface',
  accent: 'accent',
  gradient: 'gradient',
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

/**
 * The base color of an element.
 */
export type BaseColor = (typeof BaseColor)[keyof typeof BaseColor];

/**
 * The content color of an element.
 */
export const ContentColor = {
  default: 'text-default',
  subtle: 'text-subtle',
  highlighted: 'text-highlighted',
} as const;

/**
 * The content color of an element.
 */
export type ContentColor = (typeof ContentColor)[keyof typeof ContentColor];

/**
 * The size of a modal dialog.
 */
export const ModalSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  auto: 'auto',
  max: 'max',
} as const;
/**
 * The size of a modal dialog.
 */
export type ModalSize = (typeof ModalSize)[keyof typeof ModalSize];

/**
 * The size of a control element.
 */
export const ControlSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  auto: 'auto',
  max: 'max',
} as const;
/**
 * The size of a control element.
 */
export type ControlSize = (typeof ControlSize)[keyof typeof ControlSize];

/**
 * The hover effect applied to an element.
 */
export const HoverEffect = {
  none: 'none',
  scale: 'scale',
} as const;
export type HoverEffect = (typeof HoverEffect)[keyof typeof HoverEffect];
