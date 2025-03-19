import { ComponentProps } from '@src/main';
import type { JSX, ParentProps } from 'solid-js';

/**
 * The Sidebar component properties.
 */
export interface SidebarProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLHtmlElement>>,
    ParentProps {
  /**
   * Where the sidebar should be positioned.
   * @default 'left'
   */
  side?: 'left' | 'right';
}
