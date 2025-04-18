import { Component } from 'solid-js';
import { IconProps } from './icon.types';
import 'iconify-icon';

/**
 * A simple icon component that wraps the `<iconify-icon> web component.`
 * @param props
 * @returns The icon component.
 */
export const Icon: Component<IconProps> = (props) => {
  /* @ts-expect-error TypeScript doesn't know about iconify-icon. */
  return <iconify-icon {...props} attr:icon={props.icon}></iconify-icon>;
};
