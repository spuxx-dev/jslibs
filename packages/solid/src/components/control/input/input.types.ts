import { ComponentProps } from '@src/main';
import { ControlSize, InputType, SelectOption } from '@spuxx/browser-utils';
import { DOMElement, JSX } from 'solid-js/jsx-runtime';

/**
 * The Input component properties.
 */
export interface InputProps extends ComponentProps<JSX.InputHTMLAttributes<HTMLInputElement>> {
  /**
   * The input label.
   */
  label: string;
  /**
   * An optional icon to render as part of the label.
   */
  icon?: string;
  /**
   * The type of the input.
   * @default 'text'
   */
  type?: InputType;
  /**
   * An optional list of options for the input. Will be rendered into a <datalist> element that
   * is linked to the input and will be used to provide suggestions as the user types.
   */
  options?: SelectOption[];
  /**
   * If true, validation will fail if the input value is not in the list of options.
   * @default false
   */
  forceOption?: boolean;
  /**
   * The size of the input.
   * @default undefined
   */
  size?: ControlSize;
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
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Called when the input value changes.
   * @param value The input value.
   * @param event The input event.
   */
  onChange?: (
    value: string,
    event: Event & {
      currentTarget: HTMLInputElement;
      target: DOMElement;
    },
  ) => void;
  /**
   * Called when a character is being inserted or removed.
   * @param value The input value.
   * @param event The input event.
   */
  onInput?: (
    value: string,
    event: Event & {
      currentTarget: HTMLInputElement;
      target: DOMElement;
    },
  ) => void;
}
