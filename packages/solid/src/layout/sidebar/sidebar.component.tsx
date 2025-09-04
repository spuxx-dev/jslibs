import { Component, mergeProps, Show } from 'solid-js';
import Drawer from '@corvu/drawer';
import { SidebarProps } from './sidebar.types';
import { Layout } from '../layout.service';
import { attributes, classNames } from '@src/main';
import { SidebarToolbar } from './areas/toolbar';
import { SidebarContent } from './areas/content/sidebar-content.component';
import { UserAgent } from '@spuxx/browser-utils';
import { SidebarGroup } from './components/group/sidebar-group.component';

const Sidebar: Component<SidebarProps> & {
  Toolbar: typeof SidebarToolbar;
  Content: typeof SidebarContent;
  Group: typeof SidebarGroup;
} = (props) => {
  const p = mergeProps<[Partial<SidebarProps>, SidebarProps]>({ side: 'left' }, props);
  const handleOpenChange = (open: boolean) => {
    // The value check is here mostly for safety and we don't usually run into it.
    /* v8 ignore next */
    if (open) return;
    Layout.toggleSidebar();
  };
  const onContentPresentChange = (present: boolean) => {
    if (p.onContentPresentChange) p.onContentPresentChange(present);
  };

  return (
    <Drawer
      open={Layout.state.sidebarOpen}
      side={p.side}
      onContentPresentChange={onContentPresentChange}
      onOpenChange={handleOpenChange}
      noOutsidePointerEvents={UserAgent.isMobile}
      preventScroll={UserAgent.isMobile}
      trapFocus={UserAgent.isMobile}
      closeOnOutsidePointer={UserAgent.isMobile}
      closeOnEscapeKeyDown={UserAgent.isMobile}
    >
      <Drawer.Portal>
        <Show when={UserAgent.isMobile}>
          <Drawer.Overlay
            {...classNames('spx-sidebar-overlay')}
            data-open={Layout.state.sidebarOpen}
          />
        </Show>
        <Drawer.Content
          {...attributes(p)}
          {...classNames('spx-sidebar', p.class)}
          data-side={p.side}
        >
          {p.children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
};

Sidebar.Toolbar = SidebarToolbar;
Sidebar.Content = SidebarContent;
Sidebar.Group = SidebarGroup;

export { Sidebar };
