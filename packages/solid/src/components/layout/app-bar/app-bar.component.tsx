import { AppBarProps, attributes, classNames } from '@src/main';
import { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export const AppBar: Component<AppBarProps> = (props) => {
  const { position = 'top', tag = 'header' } = props;

  return (
    <Dynamic
      {...classNames('spx-app-bar', props.class)}
      {...attributes(props)}
      component={tag}
      spx-position={position}
    >
      <div {...classNames('spx-app-bar-left')}>{props.left}</div>
      <div {...classNames('spx-app-bar-center')}>{props.center}</div>
      <div {...classNames('spx-app-bar-right')}>{props.right}</div>
    </Dynamic>
  );
};
