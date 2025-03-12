import { BaseColor, ContentColor } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';
import { JSX } from 'solid-js/jsx-runtime';

/**
 * The Divider component's properties.
 */
export interface DividerProps extends ComponentProps<JSX.HTMLAttributes<HTMLHRElement>> {
  /**
   * The color of the divider.
   * @default 'text-subtle'
   */
  color?: BaseColor | ContentColor;
  /**
   * The variant of the divider.
   * @default 'line'
   */
  variant?: 'straight' | 'sleek';
  /**
   * Whether the divider is vertical.
   * @default false
   */
  vertical?: boolean;
}
