import { Component, mergeProps } from 'solid-js';
import { CardProps } from './card.types';
import { CardHeader } from './components/card-header.component';
import { attributes, classNames } from '@src/main';
import { CardContent } from './components/card-content.component';
import { CardFooter } from './components/card-footer.component';

const Card: Component<CardProps> & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
} = (props) => {
  const p = mergeProps<[Partial<CardProps>, CardProps]>(
    {
      variant: 'contained',
      color: 'surface',
      hoverEffect: 'none',
    },
    props,
  );

  return (
    <div
      {...attributes(p)}
      {...classNames('spx-card spx-scrollbar', p.class)}
      spx-variant={p.variant}
      spx-color={p.color}
      spx-hover-effect={p.hoverEffect}
    >
      {p.children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
export { Card };
