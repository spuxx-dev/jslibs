import { createEffect, createSignal, Show, type Component } from 'solid-js';
import { render } from 'solid-js/web';
import { Container, Divider, Heading } from '@spuxx/solid';
import { InteractiveControls } from './InteractiveControls';
import type { Argument } from './types';

interface Props {
  componentName: string;
  argDefinitions: Record<string, Argument<any>>;
  title?: string;
}

export const InteractiveSolid: Component<Props> = (props) => {
  const { title, componentName, argDefinitions } = props;

  let dispose: (() => void) | undefined;
  let containerRef: HTMLDivElement | null = null;

  const [state, setState] = createSignal<{
    component: Component | null;
    args: Record<string, any>;
  }>({ component: null, args: {} });

  const importComponent = async () => {
    const module = await import(`@spuxx/solid`);
    const importedComponent = module[componentName as keyof typeof module] as Component;
    setState({ component: importedComponent, args: {} });
  };
  importComponent();

  const handleArgsChange = (args: Record<string, any>) => {
    setState({ component: state().component!, args });
  };

  createEffect(() => {
    const { component, args } = state();
    if (dispose) {
      dispose();
    }

    if (containerRef && component) {
      dispose = render(() => component(args), containerRef);
    }
  });

  return (
    <div>
      <Container variant="contained" color="gradient">
        <Heading level={4}>Interactive Example: {title ?? componentName}</Heading>
        <Divider />

        <Show when={state().component}>
          <InteractiveControls argDefinitions={argDefinitions} onArgsChange={handleArgsChange} />
          {JSON.stringify(state().args)}
          <Container
            variant="contained"
            color="background"
            style={{
              padding: '2rem',
            }}
          >
            <div ref={containerRef!} />
          </Container>
        </Show>
        <Show when={!state().component}>
          <p>No component specified.</p>
        </Show>
      </Container>
    </div>
  );
};
