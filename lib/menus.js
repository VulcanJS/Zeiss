
Telescope.menuItems.removeAll("viewsMenu");
Telescope.menuItems.add("viewsMenu", [
  {
    route: Posts.getRoute,
    label: 'top',
    description: 'The most popular videos right now'
  },
  {
    route: Posts.getRoute,
    label: 'new',
    description: 'The newest videos'
  },  
  {
    route: Posts.getRoute,
    label: 'best',
    description: 'The all-time higest-rated videos'
  },
  {
    route: Posts.getRoute,
    label: 'short',
    description: 'Videos under three minutes'
  },
  {
    route: Posts.getRoute,
    label: 'pending',
    description: 'Pending videos',
    adminOnly: true
  }
]);