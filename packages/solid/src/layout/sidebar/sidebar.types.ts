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
  /**
   * Callback function to be called when the visibility ofte of the sidebar changes.
   * @param present Whether the sidebar content is visible.
   */
  onContentPresentChange?: (present: boolean) => void;
}
