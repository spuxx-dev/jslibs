import { JSX, mergeProps, Show, type Component } from 'solid-js';
import { SwitchProps } from './switch.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@src/components/typography/icon';

/**
 * A flexible switch component.
 * @param props - {@link ButtonProps}
 * @returns The switch component.
 */
export const Switch: Component<SwitchProps> = (props) => {
  const p = mergeProps<[Partial<SwitchProps>, SwitchProps]>(
    {
      variant: 'contained',
      color: 'primary',
      labelPosition: 'right',
      disabled: props.loading ? true : props.disabled,
    },
    props,
  );

  const handleChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    console.log(event);
  };

  return (
    <div
      {...attributes(p)}
      spx-variant={p.variant}
      spx-color={p.color}
      spx-size={p.size || undefined}
      {...classNames('spx-switch', p.class)}
    >
      <label class="spx-switch-label" spx-label-position={p.labelPosition}>
        <input
          type="checkbox"
          disabled={p.disabled || undefined}
          onChange={handleChange}
          class="spx-switch-input"
          {...(p.children ? {} : { 'aria-label': p.label })}
        />
        <span class="spx-switch-slider"></span>
        <span class="spx-switch-text">{p.label}</span>
      </label>
    </div>
  );
};
