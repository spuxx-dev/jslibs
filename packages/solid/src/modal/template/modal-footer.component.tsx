import { Component, ParentProps } from 'solid-js';

interface Props extends ParentProps {}

export const ModalFooter: Component<Props> = (props) => {
  return <div class="spx spx-modal-footer">{props.children}</div>;
};
