import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@solidjs/testing-library';
import { Modal } from '../modal.service';
import { ConfirmModal } from './confirm.modal';
import { ModalPortal } from '../modal-portal.component';

describe(
  'ConfirmModal',
  () => {
    let unmount: () => void;
    beforeEach(() => {
      unmount = render(() => <ModalPortal />).unmount;
    });

    afterEach(() => {
      unmount();
    });

    it('should render as expected', async () => {
      const onConfirm = vi.fn();
      await Modal.show(ConfirmModal, {
        title: 'Hello World!',
        content: 'This is a confirmation dialog.',
        confirmLabel: 'OK',
        onConfirm,
        cancelLabel: 'Cancel',
      });
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('OK')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    it('should call the onConfirm callback when the confirm button is clicked', async () => {
      const onConfirm = vi.fn();
      await Modal.show(ConfirmModal, {
        title: 'Hello World!',
        content: 'This is a confirmation dialog.',
        confirmLabel: 'OK',
        onConfirm,
        cancelLabel: 'Cancel',
      });
      const confirmButton = screen.getByText('OK');
      expect(confirmButton).toBeInTheDocument();
      confirmButton.click();
      expect(onConfirm).toHaveBeenCalled();
    });

    it('should call the onCancel callback when the confirm button is clicked', async () => {
      const onConfirm = vi.fn();
      const onCancel = vi.fn();
      await Modal.show(ConfirmModal, {
        title: 'Hello World!',
        content: 'This is a confirmation dialog.',
        confirmLabel: 'OK',
        onConfirm,
        cancelLabel: 'Cancel',
        onCancel,
      });
      const cancelButton = screen.getByText('Cancel');
      expect(cancelButton).toBeInTheDocument();
      cancelButton.click();
      await waitFor(() => expect(onCancel).toHaveBeenCalled());
    });

    it('should simply close the modal by default when the cancel button is clicked', async () => {
      const onConfirm = vi.fn();
      await Modal.show(ConfirmModal, {
        title: 'Hello World!',
        content: 'This is a confirmation dialog.',
        confirmLabel: 'OK',
        onConfirm,
        cancelLabel: 'Cancel',
      });
      const cancelButton = screen.getByText('Cancel');
      expect(cancelButton).toBeInTheDocument();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      cancelButton.click();
      expect(dialog).not.toBeInTheDocument();
    });
  },
  {
    sequential: true,
    concurrent: false,
  },
);
