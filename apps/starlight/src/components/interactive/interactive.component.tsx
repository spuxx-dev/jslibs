import { createSignal, type Component, type ComponentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Container, Divider, Heading } from '@spuxx/solid';

interface Props {
  component: Component;
}

export const Interactive: Component<Props> = (props) => {
  const { component } = props;
  const [args] = createSignal<ComponentProps<typeof component>>({});

  return (
    <Container class="outlined">
      <Heading level={2}>Live example</Heading>
      <Divider />
      <Dynamic component={props.component} {...args()} />
    </Container>
  );
};
