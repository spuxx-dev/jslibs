import { JSX, Show, type Component } from 'solid-js';
import { ButtonProps } from './button.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@src/components/typography/icon';

/**
 * A flexible button component.
 * @param props - {@link ButtonProps}
 * @returns The button component.
 */
export const Button: Component<ButtonProps> = (props) => {
  const { variant = 'contained', color = 'primary', size, rounded, loading } = props;
  const disabled = loading ? true : props.disabled;

  return (
    <button
      type="button"
      {...attributes(props)}
      title={props.title}
      spx-variant={variant}
      spx-color={color}
      spx-size={size || undefined}
      spx-rounded={rounded || undefined}
      disabled={disabled || undefined}
      onClick={props.onClick}
      {...classNames('spx-button', props.class)}
    >
      {/* Loader */}
      <Show when={loading}>
        <Show when={props.loader}>{props.loader}</Show>
        <Show when={!props.loader}>
          {/* @ts-expect-error TypeScript doesn't know about iconify-icon. */}
          <iconify-icon icon="svg-spinners:ring-resize"></iconify-icon>
        </Show>
      </Show>

      {/* Icon */}
      <Show when={typeof props.icon === 'string' && !loading}>
        <Icon icon={props.icon as string} />
      </Show>
      <Show when={typeof props.icon === 'object'}>{props.icon as JSX.Element}</Show>

      {/* Content */}
      {props.children && <span class="spx-button-content">{props.children}</span>}
    </button>
  );
};
