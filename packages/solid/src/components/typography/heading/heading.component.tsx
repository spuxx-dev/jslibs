import { mergeProps, type Component } from 'solid-js';
import { HeadingProps } from './heading.types';
import { attributes, classNames } from '@src/main';

/**
 * A component that represents a heading. Supports heading levels 1-6.
 * @param props - {@link HeadingProps}
 * @returns The heading component.
 */
export const Heading: Component<HeadingProps> = (props) => {
  const p = mergeProps<[Partial<HeadingProps>, HeadingProps]>({}, props);
  return (
    <>
      {p.level === 1 && (
        <h1 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h1>
      )}
      {p.level === 2 && (
        <h2 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h2>
      )}
      {p.level === 3 && (
        <h3 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h3>
      )}
      {p.level === 4 && (
        <h4 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h4>
      )}
      {p.level === 5 && (
        <h5 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h5>
      )}
      {p.level === 6 && (
        <h6 {...attributes(p)} {...classNames('spx-heading', p.class)}>
          {p.children}
        </h6>
      )}
    </>
  );
};
