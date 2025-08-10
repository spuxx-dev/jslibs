import { BaseColor, ContentColor, HoverEffect } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The Card component's properties.
 */
export interface CardProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLHtmlElement>>,
    ParentProps {
  /**
   * The tag  to use for the card. Note that cards may contain `<header>` and `<footer>` tags,
   * in which case you should use `section`, `article` or `aside`.
   * @default 'section'
   */
  tag?: 'div' | 'span' | 'section' | 'article' | 'aside';
  /**
   * The variant of the card.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the card.
   * @default "surface"
   */
  color?: BaseColor | ContentColor;
  /**
   * The visual effect applied on hover.
   * @default "none"
   */
  hoverEffect?: HoverEffect;
}
