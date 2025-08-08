import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The CardContent component properties.
 */
export interface CardContentProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>>,
    ParentProps {}
