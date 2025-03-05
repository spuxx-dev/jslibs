import { ComponentProps } from '@src/main';
import { BaseColor, ContentColor } from '@spuxx/browser-utils';

/**
 * The Input component properties.
 */
export interface InputProps extends ComponentProps<HTMLInputElement> {
  /**
   * The input label.
   */
  label: string;
  /**
   * The input variant.
   * @default 'contained'
   */
  variant?: string;
  /**
   * Whether the input is required.
   * @default false
   */
  required?: boolean;
  /**
   * Called when the input value changes.
   * @param value The input value.
   * @param event The input event.
   */
  onChange?: (value: string, event: Event) => void;
  /**
   * Called when a character is being inserted or removed.
   * @param value The input value.
   * @param event The input event.
   */
  onInput?: (value: string, event: Event) => void;
}
