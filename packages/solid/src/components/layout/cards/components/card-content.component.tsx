import { Component } from 'solid-js';
import { CardContentProps } from './card-content.types';

export const CardContent: Component<CardContentProps> = (props) => {
  return <div class="spx-card-content">{props.children}</div>;
};
