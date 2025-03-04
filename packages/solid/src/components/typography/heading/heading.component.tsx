import { type Component } from 'solid-js';
import { HeadingProps } from './heading.types';
import { attributes, classNames } from '@src/main';

export const Heading: Component<HeadingProps> = (props) => {
  const { level } = props;
  return (
    <>
      {level === 1 && (
        <h1 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h1>
      )}
      {level === 2 && (
        <h2 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h2>
      )}
      {level === 3 && (
        <h3 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h3>
      )}
      {level === 4 && (
        <h4 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h4>
      )}
      {level === 5 && (
        <h5 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h5>
      )}
      {level === 6 && (
        <h6 {...attributes(props)} {...classNames('spx-heading', props.class)}>
          {props.children}
        </h6>
      )}
    </>
  );
};
