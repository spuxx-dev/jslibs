import { BaseColor, ContentColor } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The AccordionItem component properties.
 */
export interface AccordionItemProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>>,
    ParentProps {
  /**
   * The title of the item.
   */
  title: string;
  /**
   * The icon that should be rendered to the left of the item's title.
   * Supports both an icon name and {@link JSX.Element}.
   */
  icon?: string | JSX.Element;
  /**
   * The variant of the accordion item.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the accordion item..
   * @default "surface"
   */
  color?: BaseColor | ContentColor;
}
