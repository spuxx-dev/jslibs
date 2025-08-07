import { Container, Divider, Heading, Accordion } from '@spuxx/solid';
import { Component } from 'solid-js';

export const AccordionRoute: Component = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <Container tag="article">
      <Heading level={1}>Accordion</Heading>
      <Divider color="gradient" />
      <Container>
        <Heading level={2}>Single</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Contained variant, surface color (default)">{text}</Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item
            title="Outlined variant, primary color"
            variant="outlined"
            color="primary"
          >
            {text}
          </Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item title="Colored variant, primary color" variant="colored" color="primary">
            {text}
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Heading level={2}>Group</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Item 1">{text}</Accordion.Item>
          <Accordion.Item title="Item 2">{text}</Accordion.Item>
          <Accordion.Item title="Item 3">{text}</Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item title="Item 1" variant="outlined" color="primary">
            {text}
          </Accordion.Item>
          <Accordion.Item title="Item 2" variant="outlined" color="primary">
            {text}
          </Accordion.Item>
          <Accordion.Item title="Item 3" variant="outlined" color="primary">
            {text}
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Heading level={2}>With Icon</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Pear" icon="mdi:fruit-pear">
            {text}
          </Accordion.Item>
          <Accordion.Item title="Cherries" icon="mdi:fruit-cherries">
            {text}
          </Accordion.Item>
          <Accordion.Item title="Watermelon" icon="mdi:fruit-watermelon">
            {text}
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};
