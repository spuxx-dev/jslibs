import { BaseColor } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The Accordion component's properties.
 */
export interface AccordionProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLHtmlElement>>,
    ParentProps {
  /**
   * The color of the accordion.
   * @default 'surface'
   */
  color?: BaseColor;
  /**
   * The variant of the accordion. No variant will be applied by default.
   * @default undefined
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * If `true`, the default padding will be removed.
   * @default false
   */
  noPadding?: boolean;
}
