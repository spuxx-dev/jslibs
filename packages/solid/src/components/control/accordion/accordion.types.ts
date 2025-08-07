import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The Accordion component properties.
 */
export interface AccordionProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLInputElement>>,
    ParentProps {
  useGutters?: boolean;
}
