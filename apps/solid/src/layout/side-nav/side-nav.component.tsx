import { Button, ButtonLink, Layout, Sidebar } from '@spuxx/solid';
import { UserAgent } from '@spuxx/browser-utils';
import { Component, For, Show } from 'solid-js';
import { getNavigationGroups } from '../../components/navigation';
import { useLocation } from '@solidjs/router';

export const SideNav: Component = () => {
  const groups = getNavigationGroups();
  const location = useLocation();

  return (
    <Sidebar side="left">
      <Sidebar.Toolbar>
        <Show when={!UserAgent.isDesktop}>
          <Button
            icon="mdi:backburger"
            title="Close"
            variant="colored"
            color="text-default"
            onClick={Layout.closeSidebar}
          />
        </Show>
        <ButtonLink
          icon="mdi:home"
          title="Home"
          href="/"
          variant="colored"
          color="text-default"
          active={location.pathname === '/'}
          onClick={Layout.closeSidebarOnMobile}
        />
        <Button icon="mdi:account" title="Account" variant="colored" color="text-default" />
        <Button icon="mdi:gear" title="Settings" variant="colored" color="text-default" />
      </Sidebar.Toolbar>
      <Sidebar.Content>
        <nav class="all-inherit">
          <For each={groups}>
            {(group) => (
              <Sidebar.Group title={group.title} icon="mdi:home">
                <For each={group.routes}>
                  {(route) => (
                    <ButtonLink
                      class="decoration-transsparent"
                      href={route.path}
                      variant="colored"
                      color="text-default"
                      active={location.pathname === route.path}
                      onClick={Layout.closeSidebarOnMobile}
                      icon="mdi:gear"
                    >
                      {route.path}
                    </ButtonLink>
                  )}
                </For>
              </Sidebar.Group>
            )}
          </For>
        </nav>
      </Sidebar.Content>
    </Sidebar>
  );
};
