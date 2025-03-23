import { Component, ParentProps } from 'solid-js';
import { Root, Item as CItem, Trigger, Content as CContent } from '@corvu/accordion';
import { AccordionProps } from './accordion.types';
import { attributes, classNames } from '@src/main';

const Item: Component<ParentProps> = (props) => {
  return <CItem {...classNames('spx-accordion-item')} {...props} />;
};

const Content: Component<ParentProps> = (props) => {
  return <CContent {...classNames('spx-accordion-content')} {...props} />;
};

const Accordion: Component<AccordionProps> & {
  Item: Component<ParentProps>;
  Content: Component<ParentProps>;
} = (props) => {
  const { color = 'surface', variant = 'contained', noPadding = false } = props;

  return (
    <Root
      {...attributes(props)}
      {...classNames('spx-accordion')}
      spx-color={color}
      spx-variant={variant}
    >
      {props.children}
    </Root>
  );
};

Accordion.Item = Item;
Accordion.Content = Content;

export { Accordion };
