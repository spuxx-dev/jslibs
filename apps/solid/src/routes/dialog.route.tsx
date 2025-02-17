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
              // color: 'gradient',
              content: `Cum consequatur occaecati dolorem quo ducimus harum est placeat.
              Quam perspiciatis exercitationem animi ut.
              Dolorem eum rerum labore. Sit est facere ratione.
              Maxime incidunt et blanditiis.`,
              onConfirm: () => Modal.close(),
              confirmLabel: 'Confirm',
              confirmIcon: 'mdi:check',
              // confirmColor: 'gradient',
              onClose: () => Modal.close(),
              cancelLabel: 'Cancel',
              // cancelColor: 'gradient',
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
