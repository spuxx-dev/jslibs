import { ComponentProps } from '@src/main';
import { JSX } from 'solid-js/jsx-runtime';

/**
 * The `Icon` component properties.
 */
export interface IconProps extends ComponentProps<JSX.HTMLAttributes<HTMLElement>> {
  /**
   * The icon name.
   * @see {@link https://icon-sets.iconify.design/}
   */
  icon: string;
}
