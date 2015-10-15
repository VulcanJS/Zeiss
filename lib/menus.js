Telescope.menuItems.add("viewsMenu", [
  {
    route: Posts.getRoute,
    name: 'short',
    label: _.partial(i18n.t, 'short'),
    description: _.partial(i18n.t, 'videos_under_three_minutes')
  }
]);