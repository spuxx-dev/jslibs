import { Component, For } from 'solid-js';
import { Container, Heading, Divider, Input } from '@spuxx/solid';

export const InputRoute: Component = () => {
  function validate(_value: string, event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    input.reportValidity();
  }

  const variants = ['contained', 'outlined'];

  return (
    <>
      <Container tag="article">
        <Heading level={1}>Input</Heading>
        <Divider color="gradient" />
        <Container variant="contained" color="background">
          <Heading level={2}>Variants</Heading>
          <Divider color="gradient" />
          <Input label="contained (default)" class="m-1" />
          <Input label="outlined" variant="outlined" class="m-1" />
          <Input label="contained, disabled" class="m-1" disabled />
          <Input label="outlined, disabled" variant="outlined" class="m-1" disabled />
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Validation</Heading>
          <Divider color="gradient" />
          <For each={variants}>
            {(variant) => (
              <>
                <Input
                  label="required"
                  class="m-1"
                  required
                  attrs={{ minlength: 5 }}
                  onInput={validate}
                  variant={variant}
                />
                <Input
                  label="Fruit"
                  class="m-1"
                  icon="mdi:fruit-cherries"
                  variant={variant}
                  options={[
                    {
                      value: 'Apple',
                      label: 'A healthy apple.',
                    },
                    {
                      value: 'Banana',
                      label: 'A sweet banana.',
                    },
                    {
                      value: 'Melon',
                      label: 'A juicy melon.',
                    },
                  ]}
                  forceOption
                  attrs={{ type: 'text' }}
                  onInput={validate}
                />
              </>
            )}
          </For>
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Sizes</Heading>
          <Divider color="gradient" />
          <For each={variants}>
            {(variant) => (
              <>
                <Input label="auto (default)" class="m-1" variant={variant} />
                <Input label="small" class="m-1" size="small" variant={variant} />
                <Input label="medium" class="m-1" size="medium" variant={variant} />
                <Input label="large" class="m-1" size="large" variant={variant} />
                <Input label="full" class="m-1" size="full" variant={variant} />
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
                <Input
                  label="Username"
                  class="m-1"
                  icon="mdi:account"
                  attrs={{ type: 'text' }}
                  variant={variant}
                />
                <Input
                  label="Password"
                  class="m-1"
                  icon="mdi:lock"
                  attrs={{ type: 'password' }}
                  variant={variant}
                />
              </>
            )}
          </For>
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Input Types</Heading>
          <Divider color="gradient" />
          <For each={variants}>
            {(variant) => (
              <>
                <Input
                  label="Username"
                  class="m-1"
                  icon="mdi:account"
                  attrs={{ type: 'text' }}
                  variant={variant}
                />
                <Input
                  label="Password"
                  class="m-1"
                  icon="mdi:lock"
                  attrs={{ type: 'password' }}
                  variant={variant}
                />
              </>
            )}
          </For>
        </Container>
      </Container>
    </>
  );
};
