import { routes } from '../../routes/routes';

export function getNavigationGroups(): Array<{ title: string; routes: Array<{ path: string }> }> {
  const groups: Array<{ title: string; routes: Array<{ path: string }> }> = [];
  for (const route of routes) {
    const title = route.path.split('/')[1];
    if (groups.find((group) => group.title === title) || title === '') continue;
    groups.push({ title, routes: routes.filter((r) => r.path.includes(title)) });
  }
  return groups;
}
