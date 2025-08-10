import {
  Button,
  Container,
  Divider,
  Heading,
  Modal,
  ConfirmModal,
  ModalPortal,
} from '@spuxx/solid';
import { Component } from 'solid-js';
import { loremMedium } from '../utils';

export const DialogRoute: Component = () => {
  return (
    <Container tag="article">
      <ModalPortal />
      <Heading level={1}>Dialog</Heading>
      <Divider color="gradient" />
      <Container tag="section" class="my-4">
        <Heading level={2}>Confirm Dialog</Heading>
        <Divider color="gradient" />
        <Button
          onClick={() => {
            Modal.show(ConfirmModal, {
              title: 'Hello World!',
              content: loremMedium,
              onConfirm: () => Modal.close(),
              confirmLabel: 'Confirm',
              confirmIcon: 'mdi:check',
              onClose: () => Modal.close(),
              cancelLabel: 'Cancel',
              size: 'medium',
            });
          }}
        >
          Open Confirm Dialog
        </Button>
      </Container>
    </Container>
  );
};
