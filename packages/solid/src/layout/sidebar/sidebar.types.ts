import { ComponentProps } from '@src/main';
import type { JSX, ParentProps } from 'solid-js';

/**
 * The Sidebar component properties.
 */
export interface SidebarProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLHtmlElement>>,
    ParentProps {
  /**
   * The side from which the sidebar should open.
   * @default 'left'
   */
  side?: 'left' | 'right';
}
