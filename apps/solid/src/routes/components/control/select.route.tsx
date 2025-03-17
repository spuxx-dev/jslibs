import { Component, For } from 'solid-js';
import { Container, Heading, Divider, Select } from '@spuxx/solid';
import { SelectOption } from '@spuxx/browser-utils';

export const SelectRoute: Component = () => {
  const variants = ['contained', 'outlined'];
  const options: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  const handleChange = (value: unknown) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <Container tag="article">
        <Heading level={1}>Input</Heading>
        <Divider color="gradient" />
        <Container variant="contained" color="background">
          <Heading level={2}>Variants</Heading>
          <Divider color="gradient" />
          <Select
            label="contained (default)"
            options={options}
            size="small"
            class="m-1"
            onChange={handleChange}
          />
          <Select
            label="outlined"
            options={options}
            variant="outlined"
            size="small"
            class="m-1"
            onChange={handleChange}
          />
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Initial Value</Heading>
          <Divider color="gradient" />
          <Select
            label="With option"
            default={options[1]}
            options={options}
            class="m-1"
            size="small"
            onChange={handleChange}
          />
          <Select
            label="With index"
            default={1}
            options={options}
            class="m-1"
            size="small"
            onChange={handleChange}
          />
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Sizes</Heading>
          <Divider color="gradient" />
          <For each={variants}>
            {(variant) => (
              <>
                <Select
                  label="auto (default)"
                  options={options}
                  class="m-1"
                  variant={variant}
                  onChange={handleChange}
                />
                <Select
                  label="small"
                  options={options}
                  class="m-1"
                  size="small"
                  variant={variant}
                  onChange={handleChange}
                />
                <Select
                  label="medium"
                  options={options}
                  class="m-1"
                  size="medium"
                  variant={variant}
                  onChange={handleChange}
                />
                <Select
                  label="large"
                  options={options}
                  class="m-1"
                  size="large"
                  variant={variant}
                  onChange={handleChange}
                />
                <Select
                  label="full"
                  options={options}
                  class="m-1"
                  size="full"
                  variant={variant}
                  onChange={handleChange}
                />
              </>
            )}
          </For>
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>With Icon</Heading>
          <Divider color="gradient" />
          <For each={variants}>
            {(variant) => (
              <>
                <Select
                  label="Fruit"
                  class="m-1"
                  icon="mdi:fruit-cherries"
                  size="small"
                  variant={variant}
                  options={options}
                  onChange={handleChange}
                />
                <Select
                  label="Fruit"
                  class="m-1"
                  icon="mdi:fruit-cherries"
                  size="small"
                  variant={variant}
                  options={options}
                  onChange={handleChange}
                />
              </>
            )}
          </For>
        </Container>
      </Container>
    </>
  );
};
