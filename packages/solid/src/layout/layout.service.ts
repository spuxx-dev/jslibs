import { UserAgent } from '@spuxx/browser-utils';
import { ServiceMixin } from '@spuxx/js-utils';
import { createSignal } from 'solid-js';

interface LayoutState {
  sidebarOpen: boolean;
}

/**
 * The `Layout` service provides global access to the layout of the application.
 */
export class Layout extends ServiceMixin<Layout>() {
  state = createSignal<LayoutState>({ sidebarOpen: false });

  /**
   * Opens the sidebar.
   */
  static openSidebar = (): void => {
    this.setState({ ...this.state, sidebarOpen: true });
  };

  /**
   * Closes the sidebar.
   */
  static closeSidebar = (): void => {
    this.setState({ ...this.state, sidebarOpen: false });
  };

  /**
   * Closes the sidebar if the current viewport is considered a mobile device.
   */
  static closeSidebarOnMobile = (): void => {
    if (UserAgent.isDesktop) return;
    this.setState({ ...this.state, sidebarOpen: false });
  };

  /**
   * Toggles the sidebar.
   */
  static toggleSidebar = (): void => {
    this.setState({ ...this.state, sidebarOpen: !this.state.sidebarOpen });
  };

  /**
   * Returns the current state of the layout. The state is read-only.
   */
  static get state(): LayoutState {
    const [state] = this.instance.state;
    return state();
  }

  /**
   * Sets the current state of the layout. You should avoid manipulating the modal state directly
   * and instead use the provided methods.
   */
  static setState = (newState: LayoutState): void => {
    const [_state, setModalState] = this.instance.state;
    setModalState(newState);
  };
}
