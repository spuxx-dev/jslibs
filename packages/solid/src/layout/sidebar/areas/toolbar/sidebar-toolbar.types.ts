import { ComponentProps } from '@src/main';
import type { JSX, ParentProps } from 'solid-js';

export interface SidebarToolbarProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLElement>>,
    ParentProps {}
