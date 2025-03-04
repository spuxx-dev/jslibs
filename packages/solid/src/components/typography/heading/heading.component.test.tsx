import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Heading } from './heading.component';

describe('Heading', () => {
  it('should render a level 1 heading', () => {
    const { getByText } = render(() => <Heading level={1}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  it('should render a level 1 heading', () => {
    const { getByText } = render(() => <Heading level={1}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  it('should render a level 2 heading', () => {
    const { getByText } = render(() => <Heading level={2}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h2');
  });

  it('should render a level 3 heading', () => {
    const { getByText } = render(() => <Heading level={3}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h3');
  });

  it('should render a level 4 heading', () => {
    const { getByText } = render(() => <Heading level={4}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h4');
  });

  it('should render a level 5 heading', () => {
    const { getByText } = render(() => <Heading level={5}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h5');
  });

  it('should render a level 6 heading', () => {
    const { getByText } = render(() => <Heading level={6}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h6');
  });

  it('should accept inline styles', () => {
    const { container } = render(() => (
      <>
        <Heading level={1} style={{ width: '1px' }} />
        <Heading level={2} style={{ width: '2px' }} />
        <Heading level={3} style={{ width: '3px' }} />
        <Heading level={4} style={{ width: '4px' }} />
        <Heading level={5} style={{ width: '5px' }} />
        <Heading level={6} style={{ width: '6px' }} />
      </>
    ));
    expect(container.children[0]).toHaveStyle({ width: '1px' });
    expect(container.children[1]).toHaveStyle({ width: '2px' });
    expect(container.children[2]).toHaveStyle({ width: '3px' });
    expect(container.children[3]).toHaveStyle({ width: '4px' });
    expect(container.children[4]).toHaveStyle({ width: '5px' });
    expect(container.children[5]).toHaveStyle({ width: '6px' });
  });
});
