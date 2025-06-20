import { JSX, mergeProps, Show, type Component } from 'solid-js';
import { Root, Item, Trigger, Content } from '@corvu/accordion';
import { SidebarGroupProps } from './sidebar-group.types';
import { attributes, classNames, Icon } from '@src/main';

export const SidebarGroup: Component<SidebarGroupProps> = (props) => {
  const p = mergeProps<[Partial<SidebarGroupProps>, SidebarGroupProps]>(
    {
      variant: 'colored',
      color: 'text-default',
    },
    props,
  );

  return (
    <div {...attributes(p)} {...classNames('spx-sidebar-group', p.class)}>
      <Root>
        <Item>
          <Trigger
            {...classNames('spx-button', 'spx-sidebar-group-trigger')}
            spx-variant={p.variant}
            spx-color={p.color}
          >
            <div class="spx-button-content spx-sidebar-group-title">
              <Show when={typeof p.icon === 'string'}>
                <Icon icon={p.icon as string} />
              </Show>
              <Show when={typeof p.icon === 'object'}>{p.icon as JSX.Element}</Show>
              {p.title}
            </div>
            <Icon class="spx-sidebar-group-chevron" icon="mdi:chevron-down" />
          </Trigger>
          <Content class="spx-sidebar-group-content">{p.children}</Content>
        </Item>
      </Root>
    </div>
  );
};
