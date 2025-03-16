import { render } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';
import { AppBar } from './app-bar.component';

describe('AppBar', () => {
  it('should render with default values', () => {
    const { getByRole } = render(() => <AppBar />);
    const appBar = getByRole('banner');
    expect(appBar).toBeInTheDocument();
    expect(appBar.tagName).toBe('HEADER');
    expect(appBar).toHaveClass('spx', 'spx-app-bar');
    expect(appBar).toHaveAttribute('spx-position', 'top');
    expect(appBar.children).toHaveLength(0);
  });

  it('should render with custom values', () => {
    const { getByRole } = render(() => <AppBar position="bottom" tag="nav" class="my-class" />);
    const appBar = getByRole('navigation');
    expect(appBar).toBeInTheDocument();
    expect(appBar.tagName).toBe('NAV');
    expect(appBar).toHaveClass('spx', 'spx-app-bar', 'my-class');
    expect(appBar).toHaveAttribute('spx-position', 'bottom');
  });

  it('should render with children', () => {
    const { getByRole } = render(() => (
      <AppBar>
        <AppBar.Section>Left</AppBar.Section>
        <AppBar.Section>Center</AppBar.Section>
        <AppBar.Section>Right</AppBar.Section>
      </AppBar>
    ));
    const appBar = getByRole('banner');
    expect(appBar).toBeInTheDocument();
    expect(appBar.children).toHaveLength(3);
    expect(appBar.children[0]).toHaveTextContent('Left');
    expect(appBar.children[1]).toHaveTextContent('Center');
    expect(appBar.children[2]).toHaveTextContent('Right');
  });
});
