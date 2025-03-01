import { ServiceMixin } from '@spuxx/js-utils';
import { UserAgentOptions } from './types';

/**
 * `UserAgent` provides functionality related to the user-agent.
 * @example
 * // Check whether the viewport is considered a desktop
 * const { isDesktop } = UserAgent;
 *
 * // You may also customize UserAgent's behavior
 * UserAgent.setOptions({ desktopBreakpoint: 1200 });
 */
export class UserAgent extends ServiceMixin<UserAgent>() {
  private _options: UserAgentOptions = {
    desktopBreakpoint: 960,
  };

  /**
   * Sets the `UserAgent`s options.
   * @param options - The options to use.
   * @returns After the options have been set.
   */
  static setOptions(options: Partial<UserAgentOptions>) {
    this.instance._options = { ...this.options, ...options };
  }

  /**
   * Gets the `UserAgent`s options.
   * @returns The `UserAgent`s options.
   */
  static get options(): UserAgentOptions {
    return UserAgent.instance._options;
  }

  /**
   * Whether the current viewport is considered a desktop.
   * @returns Whether the current viewport is considered a desktop.
   */
  static get isDesktop() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const { desktopBreakpoint } = UserAgent.options;
    return viewportWidth >= desktopBreakpoint;
  }
}
