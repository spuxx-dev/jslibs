import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The Heading component properties.
 */
export interface HeadingProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLHeadingElement>>,
    ParentProps {
  /**
   * The level of the heading.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
