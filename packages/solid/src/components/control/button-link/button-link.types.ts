import { JSX, ParentProps } from 'solid-js';
import { BaseColor, ContentColor, ControlSize } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';

/**
 * The `ButtonLink` component properties.
 */
export interface ButtonLinkProps
  extends ComponentProps<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>,
    ParentProps {
  /**
   * The `href` attribute of the button link.
   */
  href: string;
  /**
   * The size of the button link.
   * @default undefined
   */
  size?: ControlSize;
  /**
   * The variant of the button link.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the button link.
   * @default "primary"
   */
  color?: BaseColor | ContentColor;
  /**
   * The icon that should be rendered to the left of the button's content.
   * Supports both an icon name and {@link JSX.Element}.
   */
  icon?: string | JSX.Element;
  /**
   * The title of the button link.
   */
  title?: string;
  /**
   * If enabled, the icon will be rounded and no content besides the icon will be displayed.
   * @default false
   */
  rounded?: boolean;
  /**
   * If enabled, the button link is displayed as active. This may be used to e.g.
   * display the currently active route. Also sets the `aria-current` attribute
   * on the anchor element to `page`.
   @default false
   */
  active?: boolean;
  /**
   * A callback that will be called when the button link is clicked.
   * @param event The click event.
   */
  onClick?: (event: MouseEvent) => void;
}
