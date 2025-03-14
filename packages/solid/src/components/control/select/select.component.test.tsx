import { describe, expect, it, vi } from 'vitest';
import { Select } from './select.component';
import { SelectOption } from './select.types';
import { render } from '@solidjs/testing-library';

describe('Select', () => {
  const fruits: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  interface Car {
    type: string;
    color: string;
  }

  const cars: SelectOption<Car>[] = [
    {
      value: { type: 'limousine', color: 'black' },
      label: 'Black Limousine',
    },
    {
      value: { type: 'sedan', color: 'red' },
      label: 'Red Sedan',
    },
    {
      value: { type: 'coupe', color: 'blue' },
      label: 'Blue Coupe',
    },
  ];

  it('should render with default values', () => {
    const { container } = render(() => <Select label="Fruit" options={fruits} />);
    const selectContainer = container.querySelector('.spx-select');
    expect(selectContainer).toBeInTheDocument();
    expect(selectContainer).toHaveAttribute('spx-variant', 'contained');
    expect(selectContainer).not.toHaveAttribute('spx-size');
    expect(selectContainer).toHaveClass('spx', 'spx-select');
    const select = selectContainer?.querySelector('select');
    expect(select).toBeInTheDocument();
    expect(select).not.toHaveAttribute('disabled');
    const label = selectContainer?.querySelector('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', select!.id);
    const options = selectContainer?.querySelectorAll('option');
    expect(options).toHaveLength(3);
    expect(options![0]).toHaveAttribute('value', 'apple');
    expect(options![0]).toHaveAttribute('label', 'Apple');
    expect(options![1]).toHaveAttribute('value', 'banana');
    expect(options![1]).toHaveAttribute('label', 'Banana');
    expect(options![2]).toHaveAttribute('value', 'cherry');
    expect(options![2]).toHaveAttribute('label', 'Cherry');
  });

  it('should render with custom values', () => {
    const { container } = render(() => (
      <Select
        label="Fruits"
        options={fruits}
        variant="outlined"
        size="small"
        class="my-class"
        style={{ color: 'rgb(255, 0, 0)' }}
        disabled
      />
    ));
    const selectContainer = container.querySelector('.spx-select');
    expect(selectContainer).toBeInTheDocument();
    expect(selectContainer).toHaveAttribute('spx-variant', 'outlined');
    expect(selectContainer).toHaveAttribute('spx-size', 'small');
    expect(selectContainer).toHaveClass('spx', 'spx-select', 'my-class');
    expect(selectContainer).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    const select = selectContainer?.querySelector('select');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('disabled');
  });

  it('should call the onChange callback', () => {
    const onChange = vi.fn();
    const { container } = render(() => (
      <Select label="Fruits" options={fruits} onChange={onChange} />
    ));
    const select = container.querySelector('select');
    expect(select).toBeInTheDocument();
    select!.value = 'banana';
    select!.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(fruits[1].value, expect.any(Event));
  });

  it('should be able to handle complex values', () => {
    const onChange = vi.fn();
    const { container } = render(() => <Select label="Cars" options={cars} onChange={onChange} />);
    const select = container.querySelector('select');
    expect(select).toBeInTheDocument();
    select!.value = '1';
    select!.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(cars[1].value, expect.any(Event));
  });
});
