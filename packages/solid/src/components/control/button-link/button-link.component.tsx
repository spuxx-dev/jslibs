import { JSX, Show, type Component } from 'solid-js';
import { Icon, IconifyIcon } from '@iconify-icon/solid';
import { ButtonLinkProps } from './button-link.types';
import { attributes, classNames } from '@src/main';

/**
 * A link component that is styled like a button.
 * @param props - {@link ButtonProps}
 * @returns The button component.
 */
export const ButtonLink: Component<ButtonLinkProps> = (props) => {
  const { variant = 'contained', color = 'primary', size, rounded } = props;

  const handleClick = (event: MouseEvent) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <a
      {...attributes(props)}
      href={props.href}
      title={props.title}
      spx-variant={variant}
      spx-color={color}
      spx-size={size || undefined}
      spx-rounded={rounded || undefined}
      onClick={handleClick}
      {...classNames('spx-button', props.class)}
    >
      {/* Icon */}
      <Show when={typeof props.icon === 'string'}>
        <Icon icon={props.icon as IconifyIcon} />
      </Show>
      <Show when={typeof props.icon === 'object'}>{props.icon as JSX.Element}</Show>

      {/* Content */}
      {props.children && <span class="spx-button-content">{props.children}</span>}
    </a>
  );
};
