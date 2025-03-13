import { AppBarProps, attributes, classNames } from '@src/main';
import { Component } from 'solid-js';

export const AppBar: Component<AppBarProps> = (props) => {
  const { position = 'top' } = props;

  return (
    <header
      {...classNames('spx-app-bar', props.class)}
      {...attributes(props)}
      spx-position={position}
    >
      <div {...classNames('spx-app-bar-left')}>{props.left}</div>
      <div {...classNames('spx-app-bar-center')}>{props.center}</div>
      <div {...classNames('spx-app-bar-right')}>{props.right}</div>
    </header>
  );
};
