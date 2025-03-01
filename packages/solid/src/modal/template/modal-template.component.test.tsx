import { describe, it, expect, vi } from 'vitest';
import { render } from '@solidjs/testing-library';
import { ModalTemplate } from './modal-template.component';
import { ModalHeader } from './modal-header.component';
import { ModalBody } from './modal-body.component';
import { ModalFooter } from './modal-footer.component';
import { Modal } from '../modal.service';
import { Button, ModalOptions, ModalPortal } from '../../main';
import { Component } from 'solid-js';

describe('ModalTemplate', () => {
  it('a custom modal should render as expected', async () => {
    interface Props extends ModalOptions {
      title: string;
      description: string;
    }
    const CustomModal: Component<Props> = (props) => {
      return (
        <ModalTemplate {...props}>
          <ModalHeader title={props.title} />
          <ModalBody>{props.description}</ModalBody>
          <ModalFooter>
            <Button onClick={Modal.close}>Close</Button>
          </ModalFooter>
        </ModalTemplate>
      );
    };

    const { baseElement } = render(() => <ModalPortal />);
    expect(baseElement.querySelector('[role="dialog"]')).toBeNull();
    await Modal.show(CustomModal, {
      title: 'Hello World!',
      description: 'This is a custom modal.',
    });
    const dialog = baseElement.querySelector('[role="dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog).toHaveTextContent('Hello World!');
    expect(dialog).toHaveTextContent('This is a custom modal.');
    const close = dialog!.querySelector('button');
    close!.click();
    await Promise.resolve();
    expect(baseElement.querySelector('[role="dialog"]')).toBeNull();
  });

  it('should call the onClose callback when the modal is closed', async () => {
    const CustomModal: Component<ModalOptions> = (props) => {
      return (
        <ModalTemplate {...props}>
          <ModalHeader title="Hello World!" />
          <ModalBody>Closing me will call the onClose callback.</ModalBody>
        </ModalTemplate>
      );
    };

    const onClose = vi.fn();
    const { baseElement } = render(() => <ModalPortal />);
    await Modal.show(CustomModal, {
      onClose,
    });
    const dialog = baseElement.querySelector('[role="dialog"]');
    expect(dialog).not.toBeNull();
    const close = dialog!.querySelector('button');
    close!.click();
    await Promise.resolve();
    expect(onClose).toHaveBeenCalled();
  });
});
