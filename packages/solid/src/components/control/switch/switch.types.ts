import { JSX, ParentProps } from 'solid-js';
import { BaseColor, ContentColor, ControlSize } from '@spuxx/browser-utils';
import { ComponentProps } from '@src/main';

/**
 * The Button component properties.
 */
export interface SwitchProps
  extends ComponentProps<JSX.InputHTMLAttributes<HTMLInputElement>>,
    ParentProps {
  /**
   * The size of the switch container.
   * @default undefined
   */
  size?: ControlSize;
  /**
   * The variant of the switch.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined';
  /**
   * The color of the switch.
   * @default "primary"
   */
  color?: BaseColor | ContentColor;
  /**
   * The label of the switch.
   */
  label: string;
  /**
   * The position of the label relative to the switch.
   * @default "right"
   */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
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
   * A callback that will be called when the button is clicked.
   * @param event The click event.
   */
  onChange?: (event: MouseEvent) => void;
}
