import { ComponentProps } from '@src/main';
import { ParentProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

/**
 * The AppBar component properties.
 */
export interface AppBarProps extends ComponentProps<JSX.HTMLAttributes<HTMLElement>>, ParentProps {
  /**
   * The position of the app bar.
   * @default 'top'
   */
  position?: 'top' | 'bottom';
  /**
   * The tag to use for the app bar.
   * @default 'header'
   */
  tag?: 'header' | 'banner' | 'nav' | 'aside' | 'footer';
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
