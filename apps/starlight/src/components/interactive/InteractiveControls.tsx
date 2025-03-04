import { Container } from '@packages/solid';
import { createSignal, For, type Component } from 'solid-js';
import { isEmptyOrWhitespace } from '@spuxx/js-utils';
import type { Argument } from './types';

interface Props {
  argDefinitions: Record<string, Argument<any>>;
  onArgsChange: (args: Record<string, any>) => void;
}

export const InteractiveControls: Component<Props> = (props) => {
  const { argDefinitions, onArgsChange } = props;
  const [args, setArgs] = createSignal<Record<string, any>>({});

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
    <label>
      {key}
      {': '}
      {def.type === 'boolean' && (
        <input type="checkbox" name={key} checked={args()[key]} on:change={handleArgsChange} />
      )}
      {def.options && (
        <select name={key} on:change={handleArgsChange}>
          <option label="Use default value"></option>
          <For each={def.options}>{(option) => <option>{option}</option>}</For>
        </select>
      )}
    </label>
  ));

  return (
    <Container noPadding style={{ display: 'flex', 'flex-direction': 'column' }}>
      <For each={controls}>{(control) => control}</For>
    </Container>
  );
};
