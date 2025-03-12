import { RouteProps } from '@solidjs/router';
import { IndexRoute } from './index.route';
import { ButtonRoute } from './components/control/button.route';
import { ContainerRoute } from './components/layout/container.route';
import { DividerRoute } from './components/layout/divider.route';
import { DialogRoute } from './dialog.route';
import { InputRoute } from './components/control/input.route';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: IndexRoute,
  },
  {
    path: '/components/control/button',
    component: () => ButtonRoute,
  },
  {
    path: '/components/control/input',
    component: () => InputRoute,
  },
  {
    path: '/components/layout/container',
    component: () => ContainerRoute,
  },
  {
    path: '/components/layout/divider',
    component: () => DividerRoute,
  },
  {
    path: '/dialog',
    component: () => DialogRoute,
  },
];
