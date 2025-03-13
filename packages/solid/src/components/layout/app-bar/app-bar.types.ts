import { ComponentProps } from '@src/main';
import { JSX } from 'solid-js/jsx-runtime';

/**
 * The AppBar component properties.
 */
export interface AppBarProps extends ComponentProps<JSX.HTMLAttributes<HTMLElement>> {
  /**
   * The position of the app bar.
   * @default 'top'
   */
  position?: 'top' | 'bottom';
  /**
   * The left-side content of the app bar.
   */
  left?: JSX.Element;
  /**
   * The center content of the app bar.
   */
  center?: JSX.Element;
  /**
   * The right-side content of the app bar.
   */
  right?: JSX.Element;
}
