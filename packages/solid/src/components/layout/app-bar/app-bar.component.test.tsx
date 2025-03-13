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
    expect(appBar.children).toHaveLength(3);
    expect(appBar.children[0]).toHaveClass('spx', 'spx-app-bar-left');
    expect(appBar.children[1]).toHaveClass('spx', 'spx-app-bar-center');
    expect(appBar.children[2]).toHaveClass('spx', 'spx-app-bar-right');
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
      <AppBar left={<div>Left</div>} center={<div>Center</div>} right={<div>Right</div>} />
    ));
    const appBar = getByRole('banner');
    expect(appBar).toBeInTheDocument();
    expect(appBar.children).toHaveLength(3);
    expect(appBar.children[0]).toHaveTextContent('Left');
    expect(appBar.children[1]).toHaveTextContent('Center');
    expect(appBar.children[2]).toHaveTextContent('Right');
  });
});
