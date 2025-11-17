import { RouteProps } from '@solidjs/router';
import { IndexRoute } from './index.route';
import { ButtonRoute } from './components/control/button.route';
import { ContainerRoute } from './components/layout/container.route';
import { DividerRoute } from './components/layout/divider.route';
import { DialogRoute } from './dialog.route';
import { InputRoute } from './components/control/input.route';
import { SelectRoute } from './components/control/select.route';
import { ButtonLinkRoute } from './components/control/button-link.route';
import { AccordionRoute } from './components/control/accordion.route';
import { CardRoute } from './components/layout/card.route';
import { SwitchRoute } from './components/control/switch.route';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: IndexRoute,
  },
  {
    path: '/components/control/accordion',
    component: () => AccordionRoute,
  },
  {
    path: '/components/control/button',
    component: () => ButtonRoute,
  },
  {
    path: '/components/control/button-link',
    component: () => ButtonLinkRoute,
  },
  {
    path: '/components/control/input',
    component: () => InputRoute,
  },
  {
    path: '/components/control/select',
    component: () => SelectRoute,
  },
  {
    path: '/components/control/switch',
    component: () => SwitchRoute,
  },
  {
    path: '/components/layout/card',
    component: () => CardRoute,
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
