import { ComponentProps } from '@src/main';
import { JSX, ParentProps } from 'solid-js';

/**
 * The CardHeader component properties.
 */
export interface CardHeaderProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>>,
    ParentProps {
  /**
   * The title of the card header.
   */
  title: string;
  /**
   * The subtitle of the card header.
   */
  subtitle?: string;
  /**
   * The avatar that should be rendered to the left of the item's title and subtitle.
   * Supports both an icon name and {@link JSX.Element}.
   */
  avatar?: string | JSX.Element;
}
