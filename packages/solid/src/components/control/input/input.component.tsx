import { Component, For, JSX } from 'solid-js';
import { InputProps } from './input.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@iconify-icon/solid';
import { InputType } from '@spuxx/browser-utils';

/**
 * A flexible input component.
 * @param props - {@link InputProps}
 * @returns The input component.
 */
export const Input: Component<InputProps> = (props) => {
  const {
    type = InputType.text,
    variant = 'contained',
    size,
    required,
    options,
    forceOption,
  } = props;
  const id = props.attrs?.id ?? crypto.randomUUID();
  const listId = `${id}-options`;
  const pattern =
    options && forceOption ? options.map((o) => o.value).join('|') : props.attrs?.pattern;

  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    const input = event.currentTarget as HTMLInputElement;
    if (props.onChange) props.onChange(input.value, event);
  };

  const handleInput: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    const input = event.currentTarget as HTMLInputElement;
    if (props.onInput) props.onInput(input.value, event);
  };

  return (
    <div
      {...classNames('spx-input', props.class)}
      style={props.style}
      spx-variant={variant}
      spx-size={size || undefined}
    >
      <input
        {...attributes(props)}
        id={id}
        type={type}
        list={options ? listId : undefined}
        placeholder=" "
        aria-placeholder={undefined}
        required={required || undefined}
        onchange={handleChange}
        oninput={handleInput}
        pattern={pattern}
        disabled={props.disabled || undefined}
      />
      <label for={id}>
        {props.icon && <Icon icon={props.icon} />}
        {props.label}
        {required && ' *'}
      </label>
      {options && (
        <datalist id={listId}>
          <For each={options}>
            {(option) => <option value={option.value} label={option.label} />}
          </For>
        </datalist>
      )}
    </div>
  );
};
