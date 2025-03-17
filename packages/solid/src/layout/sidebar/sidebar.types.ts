import type { JSX, ParentProps } from 'solid-js';

/**
 * The Sidebar component properties.
 */
export interface SidebarProps extends ParentProps {
  /**
   * The side from which the sidebar should open.
   * @default 'left'
   */
  side?: 'left' | 'right';
  /**
   * The sidebar's title element.
   */
  title?: JSX.Element;
}
