import { Component } from 'solid-js';
import { CardFooterProps } from './card-footer.types';

export const CardFooter: Component<CardFooterProps> = (props) => {
  return <div class="spx-card-footer">{props.children}</div>;
};
