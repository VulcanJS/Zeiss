Template.views_menu.helpers({
  expandLevel: function () {
    if (this.zone === "mobileNav") {
      return 0;
    } else {
      return 1;
    }
  },
  menuType: function () {
    if (this.zone === "mobileNav") {
      return 'collapsible';
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
      return 'dropdown';
    } else {
      return 'collapsible';
    }
  }
});