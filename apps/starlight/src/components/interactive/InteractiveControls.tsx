import { Container } from '@packages/solid';
import { createSignal, For, Show, type Component } from 'solid-js';
import { isEmptyOrWhitespace } from '@spuxx/js-utils';
import type { Argument } from './types';

interface Props {
  argDefinitions: Record<string, Argument<unknown>>;
  onArgsChange: (args: Record<string, unknown>) => void;
}

export const InteractiveControls: Component<Props> = (props) => {
  const { argDefinitions, onArgsChange } = props;

  const [args, setArgs] = createSignal<Record<string, unknown>>({});

  const handleArgsChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newArgs = { ...args(), [target.name]: target.checked ?? target.value };
    for (const key in newArgs) {
      if (isEmptyOrWhitespace(newArgs[key])) delete newArgs[key];
    }
    setArgs(newArgs);
    onArgsChange(newArgs);
  };

  const controls = Object.entries(argDefinitions).map(([key, def]) => (
    <Show when={!def.hide}>
      <label>
        {key}
        {': '}
        {def.type === 'boolean' && (
          <input
            type="checkbox"
            name={key}
            checked={args()[key] as boolean}
            on:change={handleArgsChange}
          />
        )}
        {def.options && (
          <select name={key} on:change={handleArgsChange}>
            {!def.default && <option label="Use default value"></option>}
            <For each={def.options}>
              {(option) => (
                <option selected={option === def.default || undefined}>{String(option)}</option>
              )}
            </For>
          </select>
        )}
      </label>
    </Show>
  ));

  return (
    <Container noPadding style={{ display: 'flex', 'flex-direction': 'column' }}>
      <For each={controls}>{(control) => control}</For>
    </Container>
  );
};
