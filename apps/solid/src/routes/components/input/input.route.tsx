import { Component } from 'solid-js';
import { Container, Heading, Divider, Input } from '@spuxx/solid';

export const InputRoute: Component = () => {
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
          <Input label="contained, required" class="m-1" required />
          <Input label="outlined, required" variant="outlined" class="m-1" required />
        </Container>
      </Container>
    </>
  );
};
