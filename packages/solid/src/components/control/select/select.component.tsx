import { Component, For, JSX } from 'solid-js';
import { SelectOption, SelectProps } from './select.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@iconify-icon/solid';
/**
 * A flexible select component.
 * @param props - {@link SelectProps}
 * @returns The select component.
 */
export const Select: Component<SelectProps> = (props) => {
  const { variant = 'contained', size, options } = props;
  const id = props.attrs?.id ?? crypto.randomUUID();

  // Ensure that each option has a unique key
  for (const option of props.options) {
    if (!option.key) {
      option.key = crypto.randomUUID();
    }
  }

  const findOptionByKey = (key: string): SelectOption => {
    const option = options.find((option) => option.key === key);
    return option!;
  };

  const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (event) => {
    const select = event.currentTarget;
    const selectedOption = findOptionByKey(select.value);
    if (props.onChange) props.onChange(selectedOption, event);
  };

  const getSelected = (option: SelectOption): true | undefined => {
    if (props.default) {
      if (typeof props.default === 'number') {
        return props.default === options.indexOf(option) ? true : undefined;
      } else if (typeof props.default === 'string') {
        return props.default === option.key ? true : undefined;
      } else {
        return props.default === option ? true : undefined;
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
        <For each={options}>
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
