import { ComponentProps } from '@src/main';
import type { JSX, ParentProps } from 'solid-js';

export interface SidebarContentProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLElement>>,
    ParentProps {}
