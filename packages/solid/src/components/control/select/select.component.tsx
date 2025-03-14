import { Component, createSignal, For, JSX } from 'solid-js';
import { SelectOption, SelectProps } from './select.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@iconify-icon/solid';
/**
 * A flexible select component.
 * @param props - {@link SelectProps}
 * @returns The select component.
 */
export const Select: Component<SelectProps> = (props) => {
  const { variant = 'contained', size } = props;
  const id = props.attrs?.id ?? crypto.randomUUID();

  // Ensure that each option has a unique key
  const _options = [...props.options];
  for (const option of _options) {
    if (typeof option.value === 'object') {
      if (!option.key) {
        option.key = crypto.randomUUID();
      }
    }
  }
  const [options, setOptions] = createSignal<SelectOption[]>(_options);

  const findOptionByKey = (key: string): SelectOption => {
    const option = options().find((option) => option.key === key);
    if (!option) throw new Error(`Option with key ${key} not found.`);
    return option;
  };

  const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (event) => {
    const select = event.currentTarget;
    if (props.onChange) props.onChange(findOptionByKey(select.value), event);
  };

  const getSelected = (option: SelectOption): true | undefined => {
    if (props.default) {
      if (typeof props.default === 'number') {
        return props.default === options().indexOf(option) ? true : undefined;
      } else {
        return props.default.value === option ? true : undefined;
      }
    }
  };

  return (
    <div
      {...classNames('spx-select', props.class)}
      style={props.style}
      spx-variant={variant}
      spx-size={size || undefined}
    >
      <select
        {...attributes(props)}
        id={id}
        disabled={props.disabled || undefined}
        onChange={handleChange}
      >
        <For each={options()}>
          {(option) => (
            <option value={option.key} label={option.label} selected={getSelected(option)} />
          )}
        </For>
      </select>
      <label for={id}>
        {props.icon && <Icon icon={props.icon} />}
        {props.label}
      </label>
      <Icon icon="mdi:chevron-down" />
    </div>
  );
};
