import { Dynamic } from 'solid-js/web';
import { Component, mergeProps } from 'solid-js';
import { ContainerProps } from './container.types';
import { attributes, classNames } from '@src/main';

/**
 * A container component. Very flexible and can be used for most layout purposes.
 * @param props {@link ContainerProps}
 */
export const Container: Component<ContainerProps> = (props) => {
  const p = mergeProps<[Partial<ContainerProps>, ContainerProps]>(
    {
      tag: 'div',
      variant: undefined,
      color: 'surface',
      noPadding: undefined,
    },
    props,
  );

  return (
    <Dynamic
      {...attributes(p)}
      component={p.tag}
      spx-variant={p.variant}
      spx-color={p.color}
      spx-no-padding={p.noPadding}
      {...classNames('spx-container', p.class)}
    >
      {p.children}
    </Dynamic>
  );
};
