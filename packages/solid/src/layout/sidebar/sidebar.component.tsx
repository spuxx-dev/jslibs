import { Component, Show } from 'solid-js';
import Drawer from '@corvu/drawer';
import { SidebarProps } from './sidebar.types';
import { Layout } from '../layout.service';
import { attributes, classNames } from '@src/main';
import { SidebarToolbar } from './areas/toolbar';
import { SidebarToolbarProps } from './areas/toolbar/sidebar-toolbar.types';
import { SidebarContentProps } from './areas/content/sidebar-content.types';
import { SidebarContent } from './areas/content/sidebar-content.component';
import { UserAgent } from '@spuxx/browser-utils';

const Sidebar: Component<SidebarProps> & {
  Toolbar: Component<SidebarToolbarProps>;
  Content: Component<SidebarContentProps>;
} = (props) => {
  const { side = 'left' } = props;
  const handleOpenChange = (open: boolean) => {
    if (open) return;
    Layout.toggleSidebar();
  };

  return (
    <Drawer
      open={Layout.state.sidebarOpen}
      side={side}
      onOpenChange={handleOpenChange}
      modal={UserAgent.isMobile}
      trapFocus={UserAgent.isMobile}
      closeOnOutsidePointer={UserAgent.isMobile}
      closeOnEscapeKeyDown={UserAgent.isMobile}
    >
      <Drawer.Portal>
        {/* <Show when={UserAgent.isMobile}>
          <Drawer.Overlay
            {...classNames('spx-sidebar-overlay')}
            data-open={Layout.state.sidebarOpen}
          />
        </Show> */}
        <Drawer.Content
          {...attributes(props)}
          {...classNames('spx-sidebar', props.class)}
          data-side={side}
        >
          {props.children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
};

Sidebar.Toolbar = SidebarToolbar;
Sidebar.Content = SidebarContent;

export { Sidebar };
