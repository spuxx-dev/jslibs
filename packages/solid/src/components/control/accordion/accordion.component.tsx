import { Component, mergeProps } from 'solid-js';
import { AccordionProps } from './accordion.types';
import { attributes, classNames } from '@src/main';
import { Root } from '@corvu/accordion';
import { AccordionItem } from './components/item/accordion-item.component';

/**
 * A flexible accordion component.
 * @param props - {@link AccordionProps}
 * @returns The accordion component.
 */
const Accordion: Component<AccordionProps> & {
  Item: typeof AccordionItem;
} = (props) => {
  const p = mergeProps<[Partial<AccordionProps>, AccordionProps]>({}, props);

  return (
    <div {...attributes(p)} {...classNames('spx-accordion', p.class)}>
      <Root>{p.children}</Root>
    </div>
  );
};

Accordion.Item = AccordionItem;
export { Accordion };
