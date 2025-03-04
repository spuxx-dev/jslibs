import { Component } from 'solid-js';
import { DividerProps } from './divider.types';
import { attributes, classNames } from '@src/main';

/**
 * A divider component. Can be used to separate content. Supports vertical orientation.
 * Color defaults to `surface`, but can be customized with the `color` prop.
 * @param props
 * @returns
 */
export const Divider: Component<DividerProps> = (props) => {
  const { color = 'text-subtle', vertical = undefined, variant = 'straight' } = props;

  return (
    <hr
      {...attributes(props)}
      spx-color={color}
      spx-variant={variant}
      spx-vertical={vertical}
      {...classNames('spx-divider', props.class)}
    />
  );
};
