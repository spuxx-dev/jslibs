import { Component } from 'solid-js';
import { SidebarContentProps } from './sidebar-content.types';
import { attributes, classNames } from '@src/main';

export const SidebarContent: Component<SidebarContentProps> = (props) => {
  return (
    <div {...attributes(props)} {...classNames('spx-sidebar-content', props.class)}>
      {props.children}
    </div>
  );
};
