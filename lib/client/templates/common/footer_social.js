Template.footer_social.helpers({
  hasTwitter: function () {
    return !!Settings.get("twitterAccount");
  },
  hasFacebook: function () {
    return !!Settings.get("facebookPage");
  }
});