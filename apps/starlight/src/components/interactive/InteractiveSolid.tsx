import { createEffect, createSignal, Show, type Component, type ParentProps } from 'solid-js';
import { render } from 'solid-js/web';
import { Container, Divider, Heading } from '@spuxx/solid';
import { InteractiveControls } from './InteractiveControls';
import type { Argument } from './types';

interface Props extends ParentProps {
  componentName: string;
  argDefinitions: Record<string, Argument<unknown>>;
  title?: string;
}

export const InteractiveSolid: Component<Props> = (props) => {
  const { title, componentName, argDefinitions, children } = props;

  let dispose: (() => void) | undefined;
  // eslint-disable-next-line prefer-const
  let containerRef: HTMLDivElement | null = null;

  const [state, setState] = createSignal<{
    component: Component | null;
    args: Record<string, unknown>;
  }>({ component: null, args: {} });

  const importComponent = async () => {
    const module = await import(`@spuxx/solid`);
    const importedComponent = module[componentName as keyof typeof module] as Component;
    setState({ component: importedComponent, args: {} });
  };
  importComponent();

  const handleArgsChange = (args: Record<string, unknown>) => {
    for (const [key, def] of Object.entries(argDefinitions)) {
      if (!args[key]) args[key] = def.default;
    }
    setState({ component: state().component!, args });
  };

  createEffect(() => {
    const { component, args } = state();
    if (Object.keys(args).length === 0) {
      handleArgsChange(args);
      return;
    }
    if (dispose) {
      dispose();
    }

    if (containerRef && component) {
      dispose = render(() => component({ ...args, children }), containerRef);
    }
  });

  return (
    <div>
      <Container variant="contained" color="gradient">
        <Heading level={4}>Interactive Example: {title ?? componentName}</Heading>
        <Divider />

        <Show when={state().component}>
          <InteractiveControls argDefinitions={argDefinitions} onArgsChange={handleArgsChange} />
          <Container variant="contained" color="background">
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
