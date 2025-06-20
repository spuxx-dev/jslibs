import { Component, mergeProps } from 'solid-js';
import { DividerProps } from './divider.types';
import { attributes, classNames } from '@src/main';

/**
 * A divider component. Can be used to separate content. Supports vertical orientation.
 * @param props {@link DividerProps}
 * @returns The divider component.
 */
export const Divider: Component<DividerProps> = (props) => {
  const p = mergeProps<[Partial<DividerProps>, DividerProps]>(
    {
      color: 'text-subtle',
      variant: 'straight',
    },
    props,
  );

  return (
    <hr
      {...attributes(p)}
      spx-color={p.color}
      spx-variant={p.variant}
      spx-vertical={p.vertical ? 'true' : undefined}
      {...classNames('spx-divider', p.class)}
    />
  );
};
