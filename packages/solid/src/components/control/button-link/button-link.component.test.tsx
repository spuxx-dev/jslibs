import { describe, it, expect, vi } from 'vitest';
import { render } from '@solidjs/testing-library';
import { ButtonLink } from './button-link.component';

describe('ButtonLink', () => {
  it('should render with default values', () => {
    const { getByRole } = render(() => <ButtonLink href="/foo">Link</ButtonLink>);
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link');
    expect(link).toHaveAttribute('href', '/foo');
    expect(link).toHaveAttribute('spx-variant', 'contained');
    expect(link).toHaveAttribute('spx-color', 'primary');
    expect(link).not.toHaveAttribute('spx-rounded');
  });

  it('should render with custom values', () => {
    const { getByRole } = render(() => (
      <ButtonLink
        href="/foo"
        icon="mdi:star"
        variant="outlined"
        color="secondary"
        rounded
        class="my-class"
        style={{ width: '1337px' }}
        attrs={{
          id: 'link',
        }}
      >
        Link
      </ButtonLink>
    ));
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link');
    expect(link).toHaveAttribute('href', '/foo');
    expect(link).toHaveAttribute('spx-variant', 'outlined');
    expect(link).toHaveAttribute('spx-color', 'secondary');
    expect(link).toHaveAttribute('spx-rounded');
    expect(link).toHaveClass('my-class');
    expect(link).toHaveAttribute('id', 'link');
    expect(link).toHaveStyle({ width: '1337px' });
    expect(link.querySelector('iconify-icon')).toBeInTheDocument();
    expect(link.querySelector('iconify-icon')).toHaveAttribute('icon', 'mdi:star');
  });

  it('should call the onClick event', () => {
    const onClick = vi.fn();
    const { getByRole } = render(() => (
      <ButtonLink href="#" onClick={onClick}>
        Link
      </ButtonLink>
    ));
    const link = getByRole('link');
    link.click();
    expect(onClick).toHaveBeenCalled();
  });
});
