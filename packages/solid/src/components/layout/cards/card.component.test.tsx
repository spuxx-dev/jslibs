import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Card } from './card.component';

describe('Card', () => {
  it('should render with default values', () => {
    const { getByText } = render(() => (
      <Card>
        <Card.Content>Hello World</Card.Content>
      </Card>
    ));
    const content = getByText('Hello World');
    expect(content).toHaveClass('spx-card-content');
    const card = content!.parentElement;
    expect(card!.tagName).toBe('SECTION');
    expect(card).toHaveClass('spx spx-card spx-scrollbar');
    expect(card).toHaveAttribute('spx-variant', 'contained');
    expect(card).toHaveAttribute('spx-color', 'surface');
    expect(card).toHaveAttribute('spx-hover-effect', 'none');
  });

  it('should render with custom values', () => {
    const { getByText } = render(() => (
      <Card tag="span" variant="outlined" color="gradient" hoverEffect="scale">
        <Card.Content>Hello World</Card.Content>
      </Card>
    ));
    const content = getByText('Hello World');
    expect(content).toHaveClass('spx-card-content');
    const card = content!.parentElement;
    expect(card!.tagName).toBe('SPAN');
    expect(card).toHaveClass('spx spx-card');
    expect(card).toHaveAttribute('spx-variant', 'outlined');
    expect(card).toHaveAttribute('spx-color', 'gradient');
    expect(card).toHaveAttribute('spx-hover-effect', 'scale');
  });

  it('should render all areas properly', () => {
    const { getByText } = render(() => (
      <Card variant="outlined" color="gradient" hoverEffect="scale">
        <Card.Header title="Title" subtitle="Subtitle" avatar="mdi:star" />
        <Card.Content>Hello World</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    ));
    const title = getByText('Title');
    expect(title).toHaveClass('spx-card-header-details-title');
    expect(title.parentElement!.className).toMatch('spx-card-header-details');
    expect(title.parentElement!.parentElement!.className).toMatch('spx-card-header');
    const subtitle = getByText('Subtitle');
    expect(subtitle).toHaveClass('spx-card-header-details-subtitle');
    expect(subtitle.parentElement!.className).toMatch('spx-card-header-details');
    expect(subtitle.parentElement!.parentElement!.className).toMatch('spx-card-header');
    expect(subtitle).toHaveClass('spx-card-header-details-subtitle');
    const icon = title.parentElement!.parentElement!.querySelector('iconify-icon');
    expect(icon!.parentElement).toHaveClass('spx-card-header-avatar');
    expect(icon!.parentElement!.parentElement).toHaveClass('spx-card-header');
    expect(icon!.parentElement!.parentElement!.parentElement!.className).toMatch('spx-card');
    const content = getByText('Hello World');
    expect(content).toHaveClass('spx-card-content');
    expect(content.parentElement?.className).toMatch('spx-card');
    const footer = getByText('Footer');
    expect(footer).toHaveClass('spx-card-footer');
    expect(footer.parentElement!.className).toMatch('spx-card');
  });

  it('should render with an image as avatar', () => {
    const { getByRole } = render(() => (
      <Card variant="outlined" color="gradient" hoverEffect="scale">
        <Card.Header
          title="spuxx"
          subtitle="Yep, that's me!"
          avatar={<img src="https://spuxx.dev/spuxx.png" />}
        />
      </Card>
    ));
    const img = getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.parentElement).toHaveClass('spx-card-header-avatar');
  });
});
