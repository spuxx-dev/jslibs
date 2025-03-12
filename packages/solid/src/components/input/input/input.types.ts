import { ComponentProps } from '@src/main';
import { BaseColor, ContentColor } from '@spuxx/browser-utils';
import { JSX } from 'solid-js/jsx-runtime';

/**
 * The Input component properties.
 */
export interface InputProps extends ComponentProps<JSX.InputHTMLAttributes<HTMLInputElement>> {
  /**
   * The input label.
   */
  label: string;
  /**
   * The type of the input.
   */
  // type?: JSX.HTMLAttributes<HTMLInputElement>['min'];
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
