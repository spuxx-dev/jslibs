import { ComponentProps } from '@src/main';
import type { JSX, ParentProps } from 'solid-js';
import type { BaseColor, ContentColor } from '@spuxx/browser-utils';

export interface SidebarGroupProps
  extends ComponentProps<JSX.HTMLAttributes<HTMLElement>>,
    ParentProps {
  /**
   * The title of the group.
   */
  title: string;
  /**
   * The icon that should be rendered to the left of the group's title.
   * Supports both an icon name and {@link JSX.Element}.
   */
  icon?: string | JSX.Element;
  /**
   * The variant of the group trigger.
   * @default "colored"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the group trigger.
   * @default "text-default"
   */
  color?: BaseColor | ContentColor;
}
