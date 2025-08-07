import { Component } from 'solid-js';
import { Container, Heading, ButtonLink, Divider } from '@spuxx/solid';

export const ButtonLinkRoute: Component = () => {
  const href = 'https://spuxx.dev';

  return (
    <Container tag="article">
      <Heading level={1}>ButtonLink</Heading>
      <Divider color="gradient" />
      <Container>
        <Heading level={2}>Variants & Colors</Heading>
        <Divider color="gradient" />
        <Container>
          <Heading level={3}>contained (default)</Heading>
          <ButtonLink href="https://spuxx.dev" class="m-1">
            primary (default)
          </ButtonLink>
          <ButtonLink href={href} class="m-1" active>
            primary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" color="secondary">
            secondary
          </ButtonLink>
          <ButtonLink href={href} class="m-1" color="secondary" active>
            secondary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" color="gradient">
            gradient
          </ButtonLink>
          <ButtonLink href={href} class="m-1" color="gradient" active>
            gradient, active
          </ButtonLink>
        </Container>

        <Container>
          <Heading level={3}>outlined</Heading>
          <ButtonLink href={href} class="m-1" variant="outlined">
            primary (default)
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined">
            primary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="secondary">
            secondary
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="secondary" active>
            secondary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="text-default">
            text-default
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="text-default" active>
            text-default, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="gradient">
            gradient
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" color="gradient" active>
            gradient, active
          </ButtonLink>
        </Container>

        <Container>
          <Heading level={3}>colored</Heading>
          <ButtonLink href={href} class="m-1" variant="colored">
            primary (default)
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" active>
            primary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="secondary">
            secondary
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="secondary" active>
            secondary, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="text-default">
            text-default
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="text-default" active>
            text-default, active
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="gradient">
            gradient
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="colored" color="gradient" active>
            gradient, active
          </ButtonLink>
        </Container>
      </Container>

      <Container>
        <Heading level={2}>Icon</Heading>
        <Divider color="gradient" />
        <ButtonLink href={href} class="m-1" icon="mdi:star">
          Icon with text
        </ButtonLink>
        <ButtonLink href={href} class="m-1" icon="mdi:star" variant="colored" active>
          Icon with text, colored, active
        </ButtonLink>
        <ButtonLink href={href} class="m-1" icon="mdi:star" title="Icon only" />
      </Container>

      <Container>
        <Heading level={2}>Rounded</Heading>
        <Divider color="gradient" />
        <Container>
          <Heading level={3}>contained (default)</Heading>
          <ButtonLink href={href} class="m-1" rounded>
            Rounded
          </ButtonLink>
          <ButtonLink href={href} class="m-1" icon="mdi:star" rounded>
            Rounded with Icon and Text
          </ButtonLink>
          <ButtonLink href={href} class="m-1" icon="mdi:star" title="Rounded (icon only)" rounded />
        </Container>

        <Container>
          <Heading level={3}>outlined</Heading>
          <ButtonLink href={href} class="m-1" variant="outlined" rounded>
            Rounded
          </ButtonLink>
          <ButtonLink href={href} class="m-1" variant="outlined" icon="mdi:star" rounded>
            Rounded with Icon and Text
          </ButtonLink>
          <ButtonLink
            href={href}
            class="m-1"
            variant="outlined"
            icon="mdi:star"
            title="Rounded (icon only)"
            rounded
          />
        </Container>
      </Container>
    </Container>
  );
};
