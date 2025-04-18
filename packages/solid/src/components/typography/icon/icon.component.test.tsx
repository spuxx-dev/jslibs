import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Icon } from './icon.component';

describe('Icon', () => {
  it('should render with default values', () => {
    const { container } = render(() => <Icon icon="mdi:home" />);
    const icon = container.getElementsByTagName('iconify-icon')[0]!;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('icon', 'mdi:home');
  });

  it('should render with custom attributes', () => {
    const { container } = render(() => <Icon icon="mdi:home" class="my-class" />);
    const icon = container.getElementsByTagName('iconify-icon')[0]!;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('icon', 'mdi:home');
    expect(icon).toHaveAttribute('class', 'my-class');
  });

  it('should accept inline styles', () => {
    const { container } = render(() => <Icon icon="mdi:home" style={{ width: '1337px' }} />);
    const icon = container.getElementsByTagName('iconify-icon')[0]!;
    expect(icon).toHaveStyle({ width: '1337px' });
  });
});
