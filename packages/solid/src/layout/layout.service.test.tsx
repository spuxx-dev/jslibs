import { page } from '@vitest/browser/context';
import { afterEach, describe, expect, it } from 'vitest';
import { Sidebar } from './sidebar';
import { Layout } from './layout.service';
import { sleep } from '@spuxx/js-utils';
import { render, screen } from '@solidjs/testing-library';
import { UserAgent } from '@spuxx/browser-utils';

describe('Layout', () => {
  afterEach(() => {
    Layout.destroy();
    UserAgent.destroy();
  });

  describe('toggleSidebar', () => {
    it('should toggle the sidebar', async () => {
      render(() => (
        <Sidebar>
          <Sidebar.Content>Hello World!</Sidebar.Content>
        </Sidebar>
      ));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      Layout.toggleSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      Layout.toggleSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('openSidebar & closeSidebar', () => {
    it('should open and close the sidebar', async () => {
      render(() => (
        <Sidebar>
          <Sidebar.Toolbar>
            <button onClick={() => Layout.closeSidebar()}>Close</button>
          </Sidebar.Toolbar>
          <Sidebar.Content>Hello World!</Sidebar.Content>
        </Sidebar>
      ));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      Layout.openSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      Layout.closeSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('closeSidebarOnMobile', () => {
    it('should close the sidebar when viewport is considered a mobile device', async () => {
      page.viewport(375, 667);
      render(() => (
        <Sidebar>
          <Sidebar.Content>Hello World!</Sidebar.Content>
        </Sidebar>
      ));
      Layout.openSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      Layout.closeSidebarOnMobile();
      await sleep(50);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should not close the sidebar when viewport is considered a desktop', async () => {
      page.viewport(1920, 1080);
      render(() => (
        <Sidebar>
          <Sidebar.Content>Hello World!</Sidebar.Content>
        </Sidebar>
      ));
      Layout.openSidebar();
      await sleep(50);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      Layout.closeSidebarOnMobile();
      await sleep(50);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
    });
  });
});
