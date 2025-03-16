import { AppBarProps, attributes, classNames } from '@src/main';
import { Component, ParentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

/**
 * A section of the app bar.
 * @param props - {@link ParentProps}
 * @returns The section component.
 */
const Section: Component<ParentProps> = (props) => (
  <div {...classNames('spx-app-bar-section')}>{props.children}</div>
);

/**
 * A flexibile app bar component that can be used to display content and actions related
 * to the current screen.
 * @param props - {@link AppBarProps}
 * @returns The app bar component.
 * @example
 * ```tsx
 * <AppBar>
 *   <AppBar.Section>
 *     Left content
 *   </AppBar.Section>
 *   <AppBar.Section>
 *     Center content
 *   </AppBar.Section>
 *   <AppBar.Section>
 *     Right content
 *   </AppBar.Section>
 * </AppBar>
 * ```
 */
const AppBar: Component<AppBarProps> & {
  Section: Component<ParentProps>;
} = ((props) => {
  const { position = 'top', tag = 'header' } = props;

  return (
    <Dynamic
      {...classNames('spx-app-bar', props.class)}
      {...attributes(props)}
      component={tag}
      spx-position={position}
    >
      {props.children}
    </Dynamic>
  );
}) as Component<AppBarProps> & {
  Section: Component<ParentProps>;
};
AppBar.Section = Section;

export { AppBar };
