import { describe, expect, it, vi } from 'vitest';
import { Select } from './select.component';
import { SelectOption } from './select.types';
import { render } from '@solidjs/testing-library';

describe('Select', () => {
  interface Fruit {
    name: string;
    description: string;
  }

  const fruits: SelectOption<Fruit>[] = [
    {
      key: 'apple',
      value: {
        name: 'Apple',
        description: 'A red apple.',
      },
      label: 'Apple',
    },
    {
      key: 'banana',
      value: {
        name: 'Banana',
        description: 'A tasty banana.',
      },
      label: 'Banana',
    },
    { key: 'cherry', value: { name: 'Cherry', description: 'A sweet cherry.' }, label: 'Cherry' },
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
    const icon = label!.querySelector('iconify-icon');
    expect(icon).not.toBeInTheDocument();
    const options = selectContainer?.querySelectorAll('option');
    expect(options).toHaveLength(3);
    fruits.forEach((fruit, index) => {
      expect(options![index]).toHaveAttribute('value', fruit.key);
      expect(options![index]).toHaveAttribute('label', fruit.label);
    });
  });

  it('should render with custom values', () => {
    const { container } = render(() => (
      <Select
        label="Fruits"
        icon="mdi:fruit-cherries"
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
    const select = selectContainer!.querySelector('select');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('disabled');
    const label = selectContainer!.querySelector('label');
    expect(label).toBeInTheDocument();
    const icon = label!.querySelector('iconify-icon');
    expect(icon).toBeInTheDocument();
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
    expect(onChange).toHaveBeenCalledWith(fruits[1], expect.any(Event));
  });

  it('it should generate random UUIDs if no option keys are provided', () => {
    const fruitsWithoutKeys = fruits.map((fruit) => ({ ...fruit, key: undefined }));
    const { container } = render(() => <Select label="Fruits" options={fruitsWithoutKeys} />);
    const selectContainer = container.querySelector('.spx-select');
    const options = selectContainer?.querySelectorAll('option');
    expect(options).toHaveLength(3);
    fruits.forEach((_fruit, index) => {
      expect(options![index]).toHaveAttribute('value', expect.stringContaining('-'));
    });
  });

  it('should set a default option by value', () => {
    const { container } = render(() => (
      <Select label="Fruits" options={fruits} default={fruits[1]} />
    ));
    const select = container.querySelector('select');
    expect(select).toHaveValue(fruits[1].key);
  });

  it('should set a default option by key', () => {
    const { container } = render(() => (
      <Select label="Fruits" options={fruits} default={fruits[1].key} />
    ));
    const select = container.querySelector('select');
    expect(select).toHaveValue(fruits[1].key);
  });

  it('should set a default option by index', () => {
    const { container } = render(() => <Select label="Fruits" options={fruits} default={1} />);
    const select = container.querySelector('select');
    expect(select).toHaveValue(fruits[1].key);
  });

  it('should use the provided id instead of generating a random one', () => {
    const { container } = render(() => (
      <Select label="Fruits" options={fruits} attrs={{ id: 'my-select' }} />
    ));
    const select = container.querySelector('select');
    expect(select).toHaveAttribute('id', 'my-select');
  });
});
