Template.views_menu.helpers({
  startPosition: function () {
    if (this.zone === "mobileNav") {
      return "collapsed";
    } else {
      return "expanded";
    }
  },
  menuClass: function () {
    if (this.zone === "mobileNav") {
      return 'menu-collapsible';
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
      return 'menu-dropdown';
    } else {
      return 'menu-collapsible';
    }
  }
});