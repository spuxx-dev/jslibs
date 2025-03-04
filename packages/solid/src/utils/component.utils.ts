import { ComponentProps } from '@src/main';

/**
 * Joins multiple class names together.
 * @param classes The class names to join.
 * @returns The joined class names.
 * @example
 * export const MyComponent: Component<Props> = (props) => {
 *   return <div {...classNames('my-class', props.class)}></div>;
 * }
 */
export const classNames = (...classes: (string | undefined)[]): { class: string } => {
  const classNames = ['spx', ...classes.filter(Boolean)];
  return { class: classNames.join(' ') };
};

/**
 * Extracts all attributes from the given {@link ComponentProps}.
 * @param props The component properties to extract attributes from.
 * @returns A flat object containing all attributes.
 * @example
 * export const MyComponent: Component<Props> = (props) => {
 *   return <div {...attributes(props)}></div>;
 * }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const attributes = (props: ComponentProps<any>) => {
  return {
    style: props.style,
    ...props.attrs,
  };
};
