import { JSX, ParentProps } from 'solid-js';
import { BaseColor, ContentColor, ControlSize } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';

/**
 * The Button component properties.
 */
export interface ButtonProps
  extends ComponentProps<JSX.ButtonHTMLAttributes<HTMLInputElement>>,
    ParentProps {
  /**
   * The size of the button.
   * @default undefined
   */
  size?: ControlSize;
  /**
   * The variant of the button.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the button.
   * @default "primary"
   */
  color?: BaseColor | ContentColor;
  /**
   * The icon that should be rendered to the left of the button's content.
   * Supports both an icon name and {@link JSX.Element}.
   */
  icon?: string | JSX.Element;
  /**
   * The title of the button.
   */
  title?: string;
  /**
   * If enabled, the icon will be rounded and no content besides the icon will be displayed.
   * @default false
   */
  rounded?: boolean;
  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the button is loading. This will display a loading indicator and disable the button.
   * @default false
   */
  loading?: boolean;
  /**
   * An alternative loader to be displayed instead of the default loading indicator.
   * @default undefined
   */
  loader?: JSX.Element;
  /**
   * A callback that will be called when the button is clicked.
   * @param event The click event.
   */
  onClick?: (event: MouseEvent) => void;
}
