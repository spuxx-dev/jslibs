import { Component, mergeProps, Show } from 'solid-js';
import { Label, Close } from '@corvu/dialog';
import { BaseColor } from '@spuxx/browser-utils';
import { Icon } from '@src/components/typography/icon';

interface Props {
  /**
   * The modal header's title.
   */
  title: string;
  /**
   * The modal header's icon. If not provided, no icon will be shown.
   * @default undefined
   */
  icon?: string;
  /**
   * Whether too hide the close button.
   * @default false
   */
  hideClose?: boolean;
  /**
   * The color of the header.
   * @default undefined
   */
  color?: BaseColor;
}

/**
 * A template for creating modal headers.
 */
export const ModalHeader: Component<Props> = (props) => {
  const p = mergeProps<[Partial<Props>, Props]>(
    {
      hideClose: false,
    },
    props,
  );

  return (
    <div class="spx spx-modal-header" spx-variant="contained" spx-color={p.color}>
      <Label>
        <Show when={p.icon}>
          <Icon icon={p.icon!} />
        </Show>
        {p.title}
      </Label>
      <Show when={!p.hideClose}>
        <Close class="spx spx-button" spx-color="text-default" spx-rounded>
          <Icon icon="mdi:close" />
        </Close>
      </Show>
    </div>
  );
};
