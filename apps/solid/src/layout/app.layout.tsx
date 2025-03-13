import { Component, ParentProps } from 'solid-js';
import { TopAppBar } from './app-bars/top-app-bar.component';
import { BottomAppBar } from './app-bars/bottom-app-bar.component';

export const AppLayout: Component<ParentProps> = (props) => {
  return (
    <>
      <TopAppBar />
      <main>{props.children}</main>
      <BottomAppBar />
    </>
  );
};
