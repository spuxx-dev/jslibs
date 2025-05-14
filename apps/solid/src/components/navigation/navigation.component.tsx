import { Component, For } from 'solid-js';
import { Container } from '@spuxx/solid';
import { getNavigationGroups } from './navigation.utils';

export const Navigation: Component = () => {
  const groups = getNavigationGroups();

  return (
    <Container variant="contained">
      <ul class="list-none">
        <h2>Navigation</h2>
        <For each={groups}>
          {(group) => (
            <>
              {group.title}
              <For each={group.routes}>
                {(route) => (
                  <li>
                    <a class="decoration-transparent" href={route.path}>
                      {route.path}
                    </a>
                  </li>
                )}
              </For>
            </>
          )}
        </For>
      </ul>
    </Container>
  );
};
