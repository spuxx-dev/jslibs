import { AppBar, Button } from '@spuxx/solid';

export const TopAppBar = () => {
  return (
    <AppBar
      left={<Button icon="mdi:menu" title="Menu" variant="colored" color="text-default" rounded />}
      center={
        <a href="/">
          <Button title="Home" variant="colored" color="text-default" rounded>
            @spuxx/solid
          </Button>
        </a>
      }
      right={
        <a href="https://github.com/spuxx-dev/jslibs" target="_blank">
          <Button icon="mdi:github" title="GitHub" variant="colored" color="text-default" rounded />
        </a>
      }
    />
  );
};
