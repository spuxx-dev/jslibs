import { attributes, classNames, Icon } from '@src/main';
import { Component, JSX, mergeProps, Show } from 'solid-js';
import { CardHeaderProps } from './card-header.types';

export const CardHeader: Component<CardHeaderProps> = (props) => {
  const p = mergeProps<[Partial<CardHeaderProps>, CardHeaderProps]>({}, props);

  return (
    <div {...attributes(p)} {...classNames('spx-card-header', p.class)}>
      <Show when={p.avatar}>
        <div class="spx-card-header-avatar">
          {/* Avatar */}
          <Show when={typeof p.avatar === 'string'}>
            <Icon icon={p.avatar as string} />
          </Show>
          <Show when={typeof p.avatar === 'object'}>{p.avatar as JSX.Element}</Show>
        </div>
      </Show>
      <div class="spx-card-header-details">
        <p class="spx-card-header-details-title">{p.title}</p>
        <Show when={p.subtitle}>
          <p class="spx-card-header-details-subtitle">{p.subtitle}</p>
        </Show>
      </div>
    </div>
  );
};
