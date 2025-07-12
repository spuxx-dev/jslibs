import { Container, Divider, Heading } from '@spuxx/solid';
import { Component } from 'solid-js';

export const AccordionRoute: Component = () => {
  return (
    <Container tag="article">
      <Heading level={1}>Accordion</Heading>
      <Divider color="gradient" />
      <Container></Container>
    </Container>
  );
};
