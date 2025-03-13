import { AppBarProps, attributes, classNames } from '@src/main';
import { Component, ParentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const Section: Component<ParentProps> = (props) => (
  <div {...classNames('spx-app-bar-section')}>{props.children}</div>
);

const AppBar: Component<AppBarProps> & {
  Section: Component<ParentProps>;
} = ((props) => {
  const { position = 'top', tag = 'header' } = props;

  return (
    <Dynamic
      {...classNames('spx-app-bar', props.class)}
      {...attributes(props)}
      component={tag}
      spx-position={position}
    >
      {props.children}
    </Dynamic>
  );
}) as Component<AppBarProps> & {
  Section: Component<ParentProps>;
};
AppBar.Section = Section;

export { AppBar };
