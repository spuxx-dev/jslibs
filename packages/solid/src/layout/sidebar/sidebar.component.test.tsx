import { afterEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@solidjs/testing-library';
import { Sidebar } from './sidebar.component';
import { Layout } from '../layout.service';
import { sleep } from '@spuxx/js-utils';

describe('Sidebar', () => {
  afterEach(() => {
    Layout.destroy();
  });

  it('should render with default values', async () => {
    render(() => (
      <Sidebar>
        <Sidebar.Toolbar>
          <button>Foo</button>
          <button>Bar</button>
        </Sidebar.Toolbar>
        <Sidebar.Content>Hello World!</Sidebar.Content>
      </Sidebar>
    ));
    Layout.openSidebar();
    const sidebar = screen.queryByRole('dialog');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('spx', 'spx-sidebar');
    expect(sidebar).toHaveAttribute('data-side', 'left');
    expect(sidebar).toHaveTextContent('Hello World!');
  });

  it('should render with custom values', () => {
    render(() => (
      <Sidebar
        side="right"
        class="my-class"
        style={{ color: 'rgb(255,0,0)' }}
        attrs={{ id: '123' }}
      >
        <Sidebar.Toolbar>
          <button>Foo</button>
          <button>Bar</button>
        </Sidebar.Toolbar>
        <Sidebar.Content>Hello World!</Sidebar.Content>
      </Sidebar>
    ));
    Layout.openSidebar();
    const sidebar = screen.queryByRole('dialog');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('spx', 'spx-sidebar', 'my-class');
    expect(sidebar).toHaveAttribute('id', '123');
    expect(sidebar).toHaveAttribute('data-side', 'right');
    expect(sidebar).toHaveStyle({ color: 'rgb(255,0,0)' });
    expect(sidebar).toHaveTextContent('Hello World!');
  });

  it('should close the sidebar by dragging', async () => {
    render(() => (
      <Sidebar>
        <Sidebar.Content>Drag me!</Sidebar.Content>
      </Sidebar>
    ));
    Layout.openSidebar();
    const sidebar = screen.queryByRole('dialog');
    expect(sidebar).toBeInTheDocument();
    fireEvent.pointerDown(sidebar!, { clientX: 100 });
    fireEvent.pointerMove(sidebar!, { clientX: 0 });
    fireEvent.pointerUp(sidebar!);
    await sleep(50);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('Toolbar', () => {
    it('should render with default values', () => {
      const { container } = render(() => <Sidebar.Toolbar>Hello World!</Sidebar.Toolbar>);
      const toolbar = container.querySelector('.spx-sidebar-toolbar');
      expect(toolbar).toBeInTheDocument();
      expect(toolbar).toHaveClass('spx', 'spx-sidebar-toolbar');
      expect(toolbar).toHaveTextContent('Hello World!');
    });

    it('should render with custom values', () => {
      const { container } = render(() => (
        <Sidebar.Toolbar
          class="my-class"
          style={{ color: 'rgb(255,0,0)' }}
          attrs={{
            id: '123',
          }}
        >
          Hello World!
        </Sidebar.Toolbar>
      ));
      const toolbar = container.querySelector('.spx-sidebar-toolbar');
      expect(toolbar).toBeInTheDocument();
      expect(toolbar).toHaveClass('spx', 'spx-sidebar-toolbar', 'my-class');
      expect(toolbar).toHaveAttribute('id', '123');
      expect(toolbar).toHaveStyle({ color: 'rgb(255,0,0)' });
    });
  });

  describe('Content', () => {
    it('should render with default values', () => {
      const { container } = render(() => <Sidebar.Content>Hello World!</Sidebar.Content>);
      const content = container.querySelector('.spx-sidebar-content');
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('spx', 'spx-sidebar-content');
      expect(content).toHaveTextContent('Hello World!');
    });

    it('should render with custom values', () => {
      const { container } = render(() => (
        <Sidebar.Content
          class="my-class"
          style={{ color: 'rgb(255,0,0)' }}
          attrs={{
            id: '123',
          }}
        >
          Hello World!
        </Sidebar.Content>
      ));
      const content = container.querySelector('.spx-sidebar-content');
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('spx', 'spx-sidebar-content', 'my-class');
      expect(content).toHaveAttribute('id', '123');
      expect(content).toHaveStyle({ color: 'rgb(255,0,0)' });
    });
  });
});
