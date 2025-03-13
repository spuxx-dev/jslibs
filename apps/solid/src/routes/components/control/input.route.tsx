import { Component } from 'solid-js';
import { Container, Heading, Divider, Input } from '@spuxx/solid';

export const InputRoute: Component = () => {
  function validate(_value: string, event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    input.reportValidity();
  }

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
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Validation</Heading>
          <Divider color="gradient" />
          <Input
            label="contained, required"
            class="m-1"
            required
            attrs={{ minlength: 3 }}
            onInput={validate}
          />
          <Input
            label="outlined, required"
            variant="outlined"
            class="m-1"
            required
            attrs={{ minlength: 3 }}
            onInput={validate}
          />
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>Sizes</Heading>
          <Divider color="gradient" />
          <Input label="auto (default)" class="m-1" />
          <Input label="small" class="m-1" size="small" />
          <Input label="medium" class="m-1" size="medium" />
          <Input label="large" class="m-1" size="large" />
          <Input label="full" class="m-1" size="full" />
        </Container>
        <Container variant="contained" color="background">
          <Heading level={2}>With Icon</Heading>
          <Divider color="gradient" />
          <Input label="Username" class="m-1" icon="mdi:account" attrs={{ type: 'text' }} />
          <Input label="Password" class="m-1" icon="mdi:lock" attrs={{ type: 'password' }} />
          <Input
            label="Username"
            class="m-1"
            variant="outlined"
            icon="mdi:account"
            attrs={{ type: 'text' }}
          />
          <Input
            label="Password"
            class="m-1"
            variant="outlined"
            icon="mdi:lock"
            attrs={{ type: 'password' }}
          />
        </Container>
      </Container>
    </>
  );
};
