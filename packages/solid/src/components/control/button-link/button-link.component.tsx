import { JSX, mergeProps, Show, type Component } from 'solid-js';
import { ButtonLinkProps } from './button-link.types';
import { attributes, classNames } from '@src/main';
import { Icon } from '@src/components/typography/icon';

/**
 * A link component that is styled like a button.
 * @param props - {@link ButtonProps}
 * @returns The button component.
 */
export const ButtonLink: Component<ButtonLinkProps> = (props) => {
  const p = mergeProps<[Partial<ButtonLinkProps>, ButtonLinkProps]>(
    {
      variant: 'contained',
      color: 'primary',
    },
    props,
  );

  const handleClick = (event: MouseEvent) => {
    if (p.onClick) {
      p.onClick(event);
    }
  };

  return (
    <a
      {...attributes(p)}
      href={p.href}
      title={p.title}
      spx-variant={p.variant}
      spx-color={p.color}
      spx-size={p.size || undefined}
      spx-rounded={p.rounded || undefined}
      aria-current={p.active ? 'page' : undefined}
      onClick={handleClick}
      {...classNames('spx-button', p.class)}
    >
      {/* Icon */}
      <Show when={typeof p.icon === 'string'}>
        <Icon icon={p.icon as string} />
      </Show>
      <Show when={typeof p.icon === 'object'}>{p.icon as JSX.Element}</Show>

      {/* Content */}
      {p.children && <span class="spx-button-content">{p.children}</span>}
    </a>
  );
};
