/** @jsx React.DOM */

Marshmellow.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    $(".js-hide").addClass("hide");
    this.renderHeaderElements(options.$headerEl);
    this.$rootEl = options.$rootEl;
  },

  renderHeaderElements: function($headerEl) {
    // find the profile toggle
    // replace it with a backbone showHide
    // remove the visible Log Out link (this appears in showHide
    // TODO: there must be a better way to do this
    var $profileToggle = $($headerEl.find('#profile-toggle')),
        toggleContents = (
           <a href="/users/sign_out" data-method="delete" rel="nofollow">Log Out</a>
        ),
        $prepEl = $('#profile-toggle__avatar-button'),
        prepClasses = $prepEl.attr("class"),
        prepContent = $prepEl.html(),
        prependContents = (
            <a href="#" class={prepClasses}>
              {prepContent}
            </a>
        );
      this._buildShowHide($profileToggle, toggleContents, prependContents);
    },

    _buildShowHide: function($toggleEl, toggleContents, prependContents = nil) {
      var profileTogClasses = $toggleEl.attr("class"),
          profileTogText = $toggleEl.text();
      this._renderShowHide($toggleEl, profileTogClasses, prependContents,
          profileTogText, toggleContents);
    },

    _renderShowHide: function($el, toggleClasses, prependContents, toggleText,
                         toggleContents) {
      var ShowHide = Marshmellow.ShowHide,
          toggleComponent = (
          <ShowHide additionalClasses={toggleClasses}
          prependContent={prependContents} toggleText={toggleText} >
            {toggleContents}
          </ShowHide>
      );
      React.renderComponent(toggleComponent, $el.get(0));
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
  }
});
