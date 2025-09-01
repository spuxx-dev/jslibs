import { Component, JSX, mergeProps, Show } from 'solid-js';
import { Item, Trigger, Content } from '@corvu/accordion';
import { AccordionItemProps } from './accordion-item.types';
import { classNames, Icon } from '@src/main';

export const AccordionItem: Component<AccordionItemProps> = (props) => {
  const p = mergeProps<[Partial<AccordionItemProps>, AccordionItemProps]>(
    {
      variant: 'contained',
      color: 'surface',
    },
    props,
  );

  return (
    <Item>
      <h3 {...classNames('spx-accordion-item-header')} spx-variant={p.variant} spx-color={p.color}>
        <Trigger {...classNames('spx-button', 'spx-accordion-item-trigger')}>
          <Icon class="spx-accordion-item-chevron" icon="mdi:chevron-right" />
          <div class="spx-button-content spx-accordion-item-title">
            <Show when={typeof p.icon === 'string'}>
              <Icon icon={p.icon as string} />
            </Show>
            <Show when={typeof p.icon === 'object'}>{p.icon as JSX.Element}</Show>
            {p.title}
          </div>
        </Trigger>
        <Show when={p.actions}>
          <div class="spx-accordion-item-actions">{p.actions}</div>
        </Show>
      </h3>
      <Content class="spx spx-accordion-item-content" spx-variant={p.variant} spx-color={p.color}>
        <div class="spx-accordion-item-content-inner"> {p.children}</div>
      </Content>
    </Item>
  );
};
