import { afterEach, describe, expect, it, vi } from 'vitest';
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

  it('should trigger onContentPresentChange when the visiblity of the sidebar changes', async () => {
    const onContentPresentChange = vi.fn();
    render(() => (
      <Sidebar onContentPresentChange={onContentPresentChange}>
        <Sidebar.Content>Drag me!</Sidebar.Content>
      </Sidebar>
    ));
    expect(onContentPresentChange).not.toHaveBeenCalled();
    Layout.openSidebar();
    await sleep(50);
    expect(onContentPresentChange).toHaveBeenCalledWith(true);
    Layout.closeSidebar();
    await sleep(50);
    expect(onContentPresentChange).toHaveBeenCalledWith(false);
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

  describe('Group', () => {
    it('should render with default values', () => {
      const { container } = render(() => <Sidebar.Group title="Hello World!"></Sidebar.Group>);
      const group = container.querySelector('.spx-sidebar-group') as HTMLDivElement;
      expect(group).toBeInTheDocument();
      expect(group).toHaveClass('spx', 'spx-sidebar-group');
      const trigger = group.querySelector('button') as HTMLButtonElement;
      expect(trigger).toHaveTextContent('Hello World!');
      expect(trigger).toHaveClass('spx-button', 'spx-sidebar-group-trigger');
      expect(trigger).toHaveAttribute('spx-variant', 'colored');
      expect(trigger).toHaveAttribute('spx-color', 'text-default');
      expect(trigger.querySelector('iconify-icon[icon="mdi:star"]')).not.toBeInTheDocument();
    });

    it('should render with custom values', () => {
      const { container } = render(() => (
        <Sidebar.Group
          title="Hello World!"
          icon="mdi:star"
          class="my-class"
          style={{ color: 'rgb(255,0,0)' }}
          attrs={{ id: '123' }}
          variant="outlined"
          color="primary"
        ></Sidebar.Group>
      ));
      const group = container.querySelector('.spx-sidebar-group') as HTMLDivElement;
      expect(group).toBeInTheDocument();
      expect(group).toHaveClass('spx', 'spx-sidebar-group', 'my-class');
      expect(group).toHaveStyle({ color: 'rgb(255,0,0)' });
      expect(group).toHaveAttribute('id', '123');
      const trigger = group.querySelector('button') as HTMLButtonElement;
      expect(trigger).toHaveAttribute('spx-variant', 'outlined');
      expect(trigger).toHaveAttribute('spx-color', 'primary');
      expect(trigger.querySelector('iconify-icon[icon="mdi:star"]')).toBeInTheDocument();
    });

    it('should show and hide the content when trigger is clicked', async () => {
      const { container, queryByText } = render(() => (
        <Sidebar.Group title="Hello World!">Foo</Sidebar.Group>
      ));
      const group = container.querySelector('.spx-sidebar-group') as HTMLDivElement;
      const trigger = group.querySelector('button') as HTMLButtonElement;
      expect(queryByText('Foo')).not.toBeInTheDocument();
      trigger.click();
      expect(queryByText('Foo')).toBeInTheDocument();
      trigger.click();
      expect(queryByText('Foo')).not.toBeInTheDocument();
    });
  });
});
