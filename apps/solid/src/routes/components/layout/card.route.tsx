import { Divider, Heading, Container, Card, Button } from '@spuxx/solid';
import { loremMedium, loremShort } from '../../../utils';

export const CardRoute = () => {
  const now = new Date().toLocaleString();

  return (
    <Container tag="article">
      <Heading level={1}>Card</Heading>
      <Divider color="gradient" />
      <Container class="my-4">
        <Heading level={2}>Variants & colors</Heading>
        <Divider color="gradient" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card hoverEffect="scale">
            <Card.Header
              title="Contained, surface color (default)"
              subtitle={now}
              avatar="mdi:account-circle"
            />
            <Card.Content>{loremShort}</Card.Content>
            <Card.Footer>
              <Button variant="colored" color="text-default">
                Share
              </Button>
              <Button variant="colored" color="text-default" icon="mdi:info">
                Learn More
              </Button>
            </Card.Footer>
          </Card>
          <Card variant="outlined" color="gradient" hoverEffect="scale">
            <Card.Header title="Outlined, gradient color" subtitle={now} />
            <Card.Content>{loremShort}</Card.Content>
            <Card.Footer>
              <Button variant="colored" color="gradient">
                Share
              </Button>
              <Button variant="colored" color="gradient">
                Learn More
              </Button>
            </Card.Footer>
          </Card>
          <Card variant="colored" color="accent" hoverEffect="scale">
            <Card.Header title="Colored, accent color" subtitle={now} avatar="mdi:account-circle" />
            <Card.Content>{loremShort}</Card.Content>
            <Card.Footer>
              <Button variant="colored" color="accent">
                Share
              </Button>
              <Button variant="colored" color="accent" icon="mdi:info">
                Learn More
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </Container>
      <Container class="my-4">
        <Heading level={2}>Hover effects</Heading>
        <Divider color="gradient" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <Card.Header title="Hover Effect: None (default)" />
            <Card.Content>{loremShort}</Card.Content>
          </Card>
          <Card hoverEffect="scale">
            <Card.Header title="Hover Effect: Scale" />
            <Card.Content>{loremShort}</Card.Content>
          </Card>
        </div>
      </Container>
      <Container class="my-4">
        <Heading level={2}>Maximum height</Heading>
        <Divider color="gradient" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <Card.Header title="Scrollable Content" subtitle={now} avatar="mdi:arrow-down-circle" />
            <Card.Content>
              {loremMedium}
              <br />
              <br />
              {loremMedium}
              <br />
              <br />
              {loremMedium}
            </Card.Content>
          </Card>
        </div>
      </Container>
      <Container class="my-4">
        <Heading level={2}>Used as link</Heading>
        <Divider color="gradient" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://github.com/spuxx-dev/jslibs" target="_blank">
            <Card hoverEffect="scale">
              <Card.Header
                title="GitHub"
                subtitle="Check out the source code"
                avatar="mdi:github"
              />
            </Card>
          </a>
        </div>
      </Container>
      <Container class="my-4">
        <Heading level={2}>With image as avatar</Heading>
        <Divider color="gradient" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card hoverEffect="scale">
            <Card.Header
              title="spuxx"
              subtitle="Yep, that's me!"
              avatar={<img src="https://spuxx.dev/spuxx.png" />}
            />
          </Card>
        </div>
      </Container>
    </Container>
  );
};
