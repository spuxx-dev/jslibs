import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The CardFooter component properties.
 */
export interface CardFooterProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>>,
    ParentProps {}
