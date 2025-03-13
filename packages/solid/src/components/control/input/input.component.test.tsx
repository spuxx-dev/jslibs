import { describe, expect, it, vi } from 'vitest';
import { Input } from './input.component';
import { fireEvent, render } from '@solidjs/testing-library';

describe('Input', () => {
  it('should render with default values', () => {
    const { container } = render(() => <Input label="Username" />);
    const inputContainer = container.querySelector('.spx-input');
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute('spx-variant', 'contained');
    expect(inputContainer).not.toHaveAttribute('spx-size');
    expect(inputContainer).toHaveClass('spx', 'spx-input');
    const input = inputContainer?.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', ' ');
    expect(input).not.toHaveAttribute('aria-placeholder');
    expect(input).not.toHaveAttribute('required');
    expect(input).not.toHaveAttribute('list');
    expect(input).not.toHaveAttribute('pattern');
    expect(input).not.toHaveAttribute('disabled');
    const label = inputContainer?.querySelector('label');
    expect(label).toBeInTheDocument();
    expect(label!.querySelector('iconify-icon')).not.toBeInTheDocument();
    expect(label).toHaveTextContent('Username');
    expect(label).toHaveAttribute('for', input!.id);
  });

  it('should render with custom values', () => {
    const { container } = render(() => (
      <Input
        label="Username"
        variant="outlined"
        size="small"
        class="my-class"
        style={{ color: 'rgb(255, 0, 0)' }}
        type="email"
        disabled
        required
      />
    ));
    const inputContainer = container.querySelector('.spx-input');
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute('spx-variant', 'outlined');
    expect(inputContainer).toHaveAttribute('spx-size', 'small');
    expect(inputContainer).toHaveClass('spx', 'spx-input', 'my-class');
    expect(inputContainer).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    const input = inputContainer?.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('disabled');
  });

  it('should render with an icon', () => {
    const { container } = render(() => <Input label="Username" icon="mdi:account" />);
    const inputContainer = container.querySelector('.spx-input');
    expect(inputContainer).toBeInTheDocument();
    const label = inputContainer?.querySelector('label');
    expect(label).toBeInTheDocument();
    expect(label!.querySelector('iconify-icon')).toBeInTheDocument();
    expect(label!.querySelector('iconify-icon')).toHaveAttribute('icon', 'mdi:account');
  });

  it('should apply additional attributes to the input', () => {
    const { container } = render(() => <Input label="Username" attrs={{ min: 5 }} />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('min', '5');
  });

  it('should render with a list of options', () => {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ];
    const { container } = render(() => <Input label="Username" options={options} />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('list');
    const datalist = container.querySelector('datalist');
    expect(datalist).toBeInTheDocument();
    expect(datalist?.querySelectorAll('option')).toHaveLength(2);
  });

  it("should add a pattern containing all options if 'forceOption' is true", () => {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ];
    const { container } = render(() => <Input label="Username" options={options} forceOption />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('pattern', 'one|two');
  });

  it("should call the 'onChange' callback", () => {
    const onChange = vi.fn();
    const { container } = render(() => <Input label="Username" onChange={onChange} />);
    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'spuxx' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should call the 'onInput' callback", () => {
    const onInput = vi.fn();
    const { container } = render(() => <Input label="Username" onInput={onInput} />);
    const input = container.querySelector('input');
    fireEvent.input(input!, { key: 's' });
    expect(onInput).toHaveBeenCalledTimes(1);
  });
});
