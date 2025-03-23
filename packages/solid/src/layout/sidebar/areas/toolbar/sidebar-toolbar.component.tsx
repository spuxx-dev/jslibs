import { Component } from 'solid-js';
import { SidebarToolbarProps } from './sidebar-toolbar.types';
import { attributes, classNames } from '@src/main';

export const SidebarToolbar: Component<SidebarToolbarProps> = (props) => {
  return (
    <div role="toolbar" {...attributes(props)} {...classNames('spx-sidebar-toolbar', props.class)}>
      {props.children}
    </div>
  );
};
