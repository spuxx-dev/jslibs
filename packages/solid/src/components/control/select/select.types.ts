import { ComponentProps } from '@src/main';
import { ControlSize } from '@spuxx/browser-utils';
import { DOMElement, JSX } from 'solid-js/jsx-runtime';

/**
 * An option for the Select component.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectOption<T = any> {
  /**
   * The value of the option.
   */
  value: T;
  /**
   * The label of the option.
   */
  label: string;
  /**
   * The key of the option. Must be a unique string. If none is provided, a random
   * key will be generated. The key will be used to map the option to the select element.
   * ⚠️ Note: If a key is generated, the original object will be mutated.
   * @default crypto.randomUUID()
   */
  key?: string;
}

/**
 * The Select component properties.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectProps<T = any>
  extends ComponentProps<JSX.SelectHTMLAttributes<HTMLSelectElement>> {
  /**
   * The select label.
   */
  label: string;
  /**
   * An optional list of options for the select. Will be rendered into a <datalist> element that
   * is linked to the select and will be used to provide suggestions as the user types.
   */
  options: SelectOption<T>[];
  /**
   * The option or index that is initially selected. If none is provided, the first option
   * will be selected.
   * @default undefined
   */
  default?: SelectOption<T> | number | string;
  /**
   * An optional icon to render as part of the label.
   * @default undefined
   */
  icon?: string;
  /**
   * The size of the select.
   * @default undefined
   */
  size?: ControlSize;
  /**
   * The select variant.
   * @default 'contained'
   */
  variant?: string;
  /**
   * Whether the select is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Called when the selected option changes.
   * @param option The selected option
   * @param event The select event.
   * @default undefined
   */
  onChange?: <T = unknown>(
    option: SelectOption<T>,
    event: Event & {
      currentTarget: HTMLSelectElement;
      target: DOMElement;
    },
  ) => void;
}
