import { Component, For } from 'solid-js';
import { Container, Heading, Divider, Switch } from '@spuxx/solid';

export const SwitchRoute: Component = () => {
  const variants = ['contained', 'outlined'];

  const handleChange = (value: unknown) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <Container tag="article">
      <Heading level={1}>Switch</Heading>
      <Divider color="gradient" />
      <Container variant="contained" color="background">
        <Heading level={2}>Variants</Heading>
        <Divider color="gradient" />
        <For each={variants}>{(variant) => <Switch label={variant}></Switch>}</For>
      </Container>
    </Container>
  );
};
