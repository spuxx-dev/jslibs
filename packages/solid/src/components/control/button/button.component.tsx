import { JSX, mergeProps, Show, type Component } from 'solid-js';
import { ButtonProps } from './button.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@src/components/typography/icon';

/**
 * A flexible button component.
 * @param props - {@link ButtonProps}
 * @returns The button component.
 */
export const Button: Component<ButtonProps> = (props) => {
  const p = mergeProps<[Partial<ButtonProps>, ButtonProps]>(
    {
      variant: 'contained',
      color: 'primary',
      disabled: props.loading ? true : props.disabled,
    },
    props,
  );

  return (
    <button
      type="button"
      {...attributes(p)}
      title={p.title}
      spx-variant={p.variant}
      spx-color={p.color}
      spx-size={p.size || undefined}
      spx-rounded={p.rounded || undefined}
      disabled={p.disabled || undefined}
      onClick={p.onClick}
      {...classNames('spx-button', p.class)}
    >
      {/* Loader */}
      <Show when={p.loading}>
        <Show when={p.loader}>{p.loader}</Show>
        <Show when={!p.loader}>
          {/* @ts-expect-error TypeScript doesn't know about iconify-icon. */}
          <iconify-icon icon="svg-spinners:ring-resize"></iconify-icon>
        </Show>
      </Show>

      {/* Icon */}
      <Show when={typeof p.icon === 'string' && !p.loading}>
        <Icon icon={p.icon as string} />
      </Show>
      <Show when={typeof p.icon === 'object'}>{p.icon as JSX.Element}</Show>

      {/* Content */}
      {p.children && <span class="spx-button-content">{p.children}</span>}
    </button>
  );
};
