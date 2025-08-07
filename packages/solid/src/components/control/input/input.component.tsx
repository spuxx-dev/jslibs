import { Component, For, JSX, mergeProps, Show } from 'solid-js';
import { InputProps } from './input.types';
import { attributes, classNames } from '@src/main';
import { InputType } from '@spuxx/browser-utils';
import { Icon } from '@src/components/typography/icon';

/**
 * A flexible input component.
 * @param props - {@link InputProps}
 * @returns The input component.
 */
export const Input: Component<InputProps> = (props) => {
  const p = mergeProps<[Partial<InputProps>, InputProps]>(
    {
      type: InputType.text,
      variant: 'contained',
    },
    props,
  );
  const id = p.attrs?.id ?? crypto.randomUUID();
  const listId = `${id}-options`;
  const pattern =
    p.options && p.forceOption ? p.options.map((o) => o.value).join('|') : p.attrs?.pattern;

  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    const input = event.currentTarget;
    if (p.onChange) p.onChange(input.value, event);
  };

  const handleInput: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    const input = event.currentTarget;
    if (p.onInput) p.onInput(input.value, event);
  };

  return (
    <div
      {...classNames('spx-input', p.class)}
      style={p.style}
      spx-variant={p.variant}
      spx-size={p.size || undefined}
    >
      <input
        {...attributes(p)}
        id={id}
        type={p.type}
        value={p.value}
        list={p.options ? listId : undefined}
        placeholder=" "
        aria-placeholder={undefined}
        required={p.required || undefined}
        onchange={handleChange}
        oninput={handleInput}
        pattern={pattern}
        disabled={p.disabled || undefined}
      />
      <label for={id}>
        <Show when={p.icon}>
          <Icon icon={p.icon!} />
        </Show>
        {p.label}
        {p.required && ' *'}
      </label>
      {p.options && (
        <datalist id={listId}>
          <For each={p.options}>
            {(option) => <option value={option.value} label={option.label} />}
          </For>
        </datalist>
      )}
    </div>
  );
};
