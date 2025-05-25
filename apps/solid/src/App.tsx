import { Route, Router } from '@solidjs/router';
import '@spuxx/browser-utils/styles';
import '@spuxx/browser-utils/themes';
import { For, type Component } from 'solid-js';
import './styles/index.css';
import { routes } from './routes/routes';
import { AppLayout } from './layout/app.layout';

const App: Component = () => {
  return (
    <Router root={AppLayout}>
      <For each={routes}>{(route) => <Route path={route.path} component={route.component} />}</For>
    </Router>
  );
};

export default App;
