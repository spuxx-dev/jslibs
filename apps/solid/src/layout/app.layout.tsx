import { Component, ParentProps } from 'solid-js';
import { TopAppBar } from './app-bars/top-app-bar.component';
import { BottomAppBar } from './app-bars/bottom-app-bar.component';
import { SideNav } from './side-nav/side-nav.component';

export const AppLayout: Component<ParentProps> = (props) => {
  return (
    <>
      <TopAppBar />
      <SideNav />
      <main>{props.children}</main>
      <BottomAppBar />
    </>
  );
};
