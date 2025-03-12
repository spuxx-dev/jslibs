import { Component } from 'solid-js';
import { InputProps } from './input.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@iconify-icon/solid';

export const Input: Component<InputProps> = (props) => {
  const { variant = 'contained', size, required } = props;
  const id = props.attrs?.id ?? crypto.randomUUID();

  const handleChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (props.onChange) props.onChange(value, event);
  };

  const handleInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (props.onInput) props.onInput(value, event);
  };

  return (
    <div
      {...classNames('spx-input', props.class)}
      spx-variant={variant}
      spx-size={size || undefined}
    >
      <input
        {...attributes(props)}
        id={id}
        placeholder=" "
        aria-placeholder={undefined}
        required={required || undefined}
        onchange={handleChange}
        oninput={handleInput}
      />
      <label for={id}>
        {props.label}
        {required && ' *'}
      </label>
    </div>
  );
};
