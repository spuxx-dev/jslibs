import { Component, mergeProps, ParentProps } from 'solid-js';
import { Modal } from '../modal.service';
import { ModalOptions } from '../modal.types';
import { Content, Overlay, Portal, Root } from '@corvu/dialog';

interface Props extends ModalOptions, ParentProps {}

/**
 * A template for creating modal dialogs.
 * @param options {@link ModalOptions}
 * @example
 * ```tsx
 * import { ModalTemplate, ModalHeader, ModalBody, ModalFooter, Button } from '@spuxx/solid';
 * export const MyModal = (options) => {
 *   return (
 *     <ModalTemplate {...options}>
 *       <ModalHeader title="Hello World!" />
 *       <ModalBody>This is a modal dialog.</ModalBody>
 *       <ModalFooter>
 *         <Button>Close</Button>
 *       </ModalFooter>
 *     </ModalTemplate>
 *   );
 * }
 * ```
 */
export const ModalTemplate: Component<Props> = (options) => {
  const p = mergeProps<[Partial<Props>, Props]>(
    {
      size: 'auto',
      preventClose: false,
    },
    options,
  );

  const handleOpenChange = (value: boolean) => {
    // The value check is here mostly for safety and we don't usually run into it.
    /* v8 ignore next */
    if (value) return;
    Modal.close();
    if (typeof p.onClose === 'function') p.onClose();
  };

  const handleContentPresentChange = (value: boolean) => {
    // The value check is here mostly for safety and we don't usually run into it.
    /* v8 ignore next */
    if (value) return;
    Modal.setState({
      open: false,
      component: null,
    });
  };

  return (
    <Root
      open={Modal.state.open}
      modal={true}
      trapFocus={true}
      preventScroll={true}
      closeOnEscapeKeyDown={!p.preventClose}
      closeOnOutsidePointer={!p.preventClose}
      onOpenChange={handleOpenChange}
      onContentPresentChange={handleContentPresentChange}
    >
      <Portal forceMount={true}>
        <Overlay class="spx-modal-overlay" />
        <Content class="spx-modal" data-size={p.size}>
          {p.children}
        </Content>
      </Portal>
    </Root>
  );
};
