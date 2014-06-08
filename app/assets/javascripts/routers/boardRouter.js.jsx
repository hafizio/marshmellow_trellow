/** @jsx React.DOM */

Marshmellow.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.renderHeaderElements(options.$profileDropdownEl);
    this.$rootEl = options.$rootEl;
  },

  renderHeaderElements: function($profileDropdownEl) {
    var ProfileDropdown = Marshmellow.ProfileDropdown;
    React.renderComponent(<ProfileDropdown />, $profileDropdownEl.get(0));
  },

  routes: {
    "": "index",
    "boards/:id": "show"
  },

  index: function() {
    var BoardIndex = Marshmellow.BoardIndex;
    React.renderComponent(<BoardIndex />, this.$rootEl.get(0));
  },

  show: function(boardId) {
    console.log("got to show!");
    React.unmountComponentAtNode(this.$rootEl.get(0));
    var BoardShow = Marshmellow.BoardShow;
    React.renderComponent(<BoardShow boardId={boardId} />, this.$rootEl.get(0));
  }
});
