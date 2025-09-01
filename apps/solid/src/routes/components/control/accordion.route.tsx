import { Container, Divider, Heading, Accordion, Button } from '@spuxx/solid';
import { Component } from 'solid-js';
import { loremMedium } from '../../../utils';

export const AccordionRoute: Component = () => {
  return (
    <Container tag="article">
      <Heading level={1}>Accordion</Heading>
      <Divider color="gradient" />
      <Container>
        <Heading level={2}>Single</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Contained variant, surface color (default)">
            {loremMedium}
          </Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item
            title="Outlined variant, primary color"
            variant="outlined"
            color="primary"
          >
            {loremMedium}
          </Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item title="Colored variant, primary color" variant="colored" color="primary">
            {loremMedium}
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Heading level={2}>Group</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Item 1">{loremMedium}</Accordion.Item>
          <Accordion.Item title="Item 2">{loremMedium}</Accordion.Item>
          <Accordion.Item title="Item 3">{loremMedium}</Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item title="Item 1" variant="outlined" color="primary">
            {loremMedium}
          </Accordion.Item>
          <Accordion.Item title="Item 2" variant="outlined" color="primary">
            {loremMedium}
          </Accordion.Item>
          <Accordion.Item title="Item 3" variant="outlined" color="primary">
            {loremMedium}
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Heading level={2}>With Icon</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item title="Pear" icon="mdi:fruit-pear">
            {loremMedium}
          </Accordion.Item>
          <Accordion.Item title="Cherries" icon="mdi:fruit-cherries">
            {loremMedium}
          </Accordion.Item>
          <Accordion.Item title="Watermelon" icon="mdi:fruit-watermelon">
            {loremMedium}
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Heading level={2}>With Actions</Heading>
        <Divider color="gradient" />
        <Accordion class="m-1">
          <Accordion.Item
            title="Lorem Ipsum"
            icon="mdi:text"
            actions={
              <>
                <Button
                  variant="colored"
                  color="text-default"
                  icon="mdi:delete"
                  title="Delete"
                ></Button>
                <Button
                  variant="colored"
                  color="text-default"
                  icon="mdi:info"
                  title="Delete"
                ></Button>
              </>
            }
          >
            {loremMedium}
          </Accordion.Item>
        </Accordion>
        <Accordion class="m-1">
          <Accordion.Item
            title="Lorem Ipsum"
            icon="mdi:text"
            variant="outlined"
            color="primary"
            actions={
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  icon="mdi:delete"
                  title="Delete"
                ></Button>
                <Button variant="outlined" color="primary" icon="mdi:info" title="Delete"></Button>
              </>
            }
          >
            {loremMedium}
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};
