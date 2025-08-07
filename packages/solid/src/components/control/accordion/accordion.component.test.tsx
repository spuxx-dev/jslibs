import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import { Accordion } from './accordion.component';

describe('Accordion', () => {
  it('should render with default values', () => {
    const { getByText } = render(() => (
      <Accordion>
        <Accordion.Item title="Item 1">Content 1</Accordion.Item>
        <Accordion.Item title="Item 2">Content 2</Accordion.Item>
      </Accordion>
    ));
    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item1.parentElement).toHaveClass('spx spx-button spx-accordion-item-trigger');
    expect(item2.parentElement).toHaveClass('spx spx-button spx-accordion-item-trigger');
    expect(item1.parentElement!.parentElement).toHaveClass('spx spx-accordion');
    expect(item2.parentElement!.parentElement).toHaveClass('spx spx-accordion');
    expect(item1.parentElement!.querySelector('.spx-accordion-item-chevron')).toBeInTheDocument();
    expect(item2.parentElement!.querySelector('.spx-accordion-item-chevron')).toBeInTheDocument();
    expect(item1.querySelector('iconify-icon')).not.toBeInTheDocument();
    expect(item2.querySelector('iconify-icon')).not.toBeInTheDocument();
    expect(item1.parentElement).toHaveAttribute('spx-variant', 'contained');
    expect(item2.parentElement).toHaveAttribute('spx-variant', 'contained');
    expect(item1.parentElement).toHaveAttribute('spx-color', 'surface');
    expect(item2.parentElement).toHaveAttribute('spx-color', 'surface');
  });

  it('should render with custom values', () => {
    const { getByText } = render(() => (
      <Accordion>
        <Accordion.Item title="Item 1" icon="mdi:star" variant="outlined" color="gradient">
          Content 1
        </Accordion.Item>
        <Accordion.Item title="Item 2">Content 2</Accordion.Item>
      </Accordion>
    ));
    const item1 = getByText('Item 1');
    expect(item1).toBeInTheDocument();
    expect(item1.parentElement).toHaveClass('spx-button');
    expect(item1.querySelector('iconify-icon')).toBeInTheDocument();
    expect(item1.querySelector('iconify-icon')).toHaveAttribute('icon', 'mdi:star');
    expect(item1.parentElement).toHaveAttribute('spx-variant', 'outlined');
    expect(item1.parentElement).toHaveAttribute('spx-color', 'gradient');
    expect(item1.parentElement!.querySelector('.spx-accordion-item-chevron')).toBeInTheDocument();
  });

  it('should open and close items', async () => {
    const { getByText, queryByText } = render(() => (
      <Accordion>
        <Accordion.Item title="Item 1">Content 1</Accordion.Item>
        <Accordion.Item title="Item 2">Content 2</Accordion.Item>
      </Accordion>
    ));
    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');

    // Initially, content should not be visible
    expect(queryByText('Content 1')).not.toBeInTheDocument();
    expect(queryByText('Content 2')).not.toBeInTheDocument();

    // Click to open Item 1
    item1.click();
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(queryByText('Content 2')).not.toBeInTheDocument();

    // Click to open Item 2
    item2.click();
    expect(getByText('Content 2')).toBeInTheDocument();
    expect(queryByText('Content 1')).not.toBeInTheDocument();

    // Click to close Item 2
    item2.click();
    expect(queryByText('Content 2')).not.toBeInTheDocument();
  });
});
