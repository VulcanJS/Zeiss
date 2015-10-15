// not used

Template.nav_footer.helpers({
  menuItems: function () {
    return Telescope.menuItems.get("userMenu");
  },
  user: function () {
    return Meteor.user();
  },
  hasAboutPage: function () {
    return !!Pages.findOne({slug: 'about'});
  }
});

Template.nav_footer.events({
  "click .js-toggle-search": function (event, template) {
    event.preventDefault();
    template.$(".nav-footer-search").toggleClass("search-closed");
  }
});