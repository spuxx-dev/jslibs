import { JSX, Show, type Component } from 'solid-js';
import { Root, Item, Trigger, Content } from '@corvu/accordion';
import { SidebarGroupProps } from './sidebar-group.types';
import { attributes, classNames, Icon } from '@src/main';

export const SidebarGroup: Component<SidebarGroupProps> = (props) => {
  const { variant = 'colored', color = 'text-default' } = props;

  return (
    <div {...attributes(props)} {...classNames('spx-sidebar-group', props.class)}>
      <Root>
        <Item>
          <Trigger
            {...classNames('spx-button', 'spx-sidebar-group-trigger')}
            spx-variant={variant}
            spx-color={color}
          >
            <div class="spx-button-content spx-sidebar-group-title">
              <Show when={typeof props.icon === 'string'}>
                <Icon icon={props.icon as string} />
              </Show>
              <Show when={typeof props.icon === 'object'}>{props.icon as JSX.Element}</Show>
              {props.title}
            </div>
            <Icon class="spx-sidebar-group-chevron" icon="mdi:chevron-down" />
          </Trigger>
          <Content class="spx-sidebar-group-content">{props.children}</Content>
        </Item>
      </Root>
    </div>
  );
};
