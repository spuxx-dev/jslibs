import { Component, Show } from 'solid-js';
import Drawer from '@corvu/drawer';
import { SidebarProps } from './sidebar.types';
import { Layout } from '../layout.service';

export const Sidebar: Component<SidebarProps> = ({ side = 'left', title }) => {
  const handleOpenChange = (open: boolean) => {
    if (open) return;
    Layout.toggleSidebar();
  };

  return (
    <Drawer open={Layout.state.sidebarOpen} side={side} onOpenChange={handleOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay class="spx spx-sidebar-overlay" />
        <Drawer.Content class="spx spx-sidebar" data-side={side}>
          <Drawer.Close />
          <Show when={title}>
            <Drawer.Label>{title}</Drawer.Label>
          </Show>
          <Drawer.Description>
            <slot />
          </Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
};
