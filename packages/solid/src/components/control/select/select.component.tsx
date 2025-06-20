import { Component, For, JSX, mergeProps, Show } from 'solid-js';
import { SelectOption, SelectProps } from './select.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@src/components/typography/icon';
/**
 * A flexible select component.
 * @param props - {@link SelectProps}
 * @returns The select component.
 */
export const Select: Component<SelectProps> = (props) => {
  const p = mergeProps<[Partial<SelectProps>, SelectProps]>(
    {
      variant: 'contained',
      options: [],
    },
    props,
  );
  const id = p.attrs?.id ?? crypto.randomUUID();

  // Ensure that each option has a unique key
  for (const option of p.options) {
    option.key = option.key ?? crypto.randomUUID();
  }

  const findOptionByKey = (key: string): SelectOption => {
    const option = p.options.find((option) => option.key === key);
    return option!;
  };

  const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (event) => {
    const select = event.currentTarget;
    const selectedOption = findOptionByKey(select.value);
    if (p.onChange) p.onChange(selectedOption, event);
  };

  const getSelected = (option: SelectOption): true | undefined => {
    if (p.default) {
      if (typeof p.default === 'number') {
        return p.default === p.options.indexOf(option) ? true : undefined;
      } else if (typeof p.default === 'string') {
        return p.default === option.key ? true : undefined;
      } else {
        return p.default === option ? true : undefined;
      }
    }
  };

  return (
    <div
      {...classNames('spx-select', p.class)}
      style={p.style}
      spx-variant={p.variant}
      spx-size={p.size || undefined}
    >
      <select {...attributes(p)} id={id} disabled={p.disabled || undefined} onChange={handleChange}>
        <For each={p.options}>
          {(option) => (
            <option value={option.key} label={option.label} selected={getSelected(option)} />
          )}
        </For>
      </select>
      <label for={id}>
        <Show when={p.icon}>
          <Icon icon={p.icon!} />
        </Show>
        {p.label}
      </label>
      <Icon icon="mdi:chevron-down" />
    </div>
  );
};
