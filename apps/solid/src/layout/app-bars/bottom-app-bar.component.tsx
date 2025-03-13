import { AppBar, Button } from '@spuxx/solid';

export const BottomAppBar = () => {
  return (
    <AppBar
      position="bottom"
      tag="footer"
      center={
        <a href="https://spuxx.dev">
          <Button variant="colored" color="text-default" rounded>
            Made with ❤️ by spuxx
          </Button>
        </a>
      }
    />
  );
};
