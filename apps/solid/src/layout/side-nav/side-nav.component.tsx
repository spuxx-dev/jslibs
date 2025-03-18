import { Button, ButtonLink, Layout, Sidebar } from '@spuxx/solid';
import { UserAgent } from '@spuxx/browser-utils';
import { For, Show } from 'solid-js';
import { routes } from '../../routes/routes';

export const SideNav = () => {
  const handleLinkClick = () => {
    if (UserAgent.isDesktop) return;
    Layout.closeSidebar();
  };

  return (
    <Sidebar>
      <Sidebar.Toolbar>
        <Show when={!UserAgent.isDesktop}>
          <Button
            icon="mdi:backburger"
            title="Close"
            variant="colored"
            color="text-default"
            onClick={handleLinkClick}
          />
        </Show>
        <ButtonLink
          icon="mdi:home"
          title="Home"
          href="/"
          variant="colored"
          color="text-default"
          onClick={handleLinkClick}
        />
        <Button icon="mdi:account" title="Account" variant="colored" color="text-default" />
        <Button icon="mdi:gear" title="Settings" variant="colored" color="text-default" />
      </Sidebar.Toolbar>
      <Sidebar.Content>
        <nav>
          <ul>
            <For each={routes}>
              {(route) => (
                <li>
                  <ButtonLink class="decoration-transparent" href={route.path}>
                    {route.path}
                  </ButtonLink>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </Sidebar.Content>
    </Sidebar>
  );
};
