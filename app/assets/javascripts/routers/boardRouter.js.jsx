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
        profileTogClasses = $profileToggle.attr("class"),
        profileTogText = $profileToggle.text(),
        $prepEl = $('#profile-toggle__avatar-button'),
        prepClasses = $prepEl.attr("class"),
        prepContent = $prepEl.html(),
        toggleContents = (
           <a href="/users/sign_out" data-method="delete" rel="nofollow">Log Out</a>
        ),
        prependContents = (
            <a href="#" class={prepClasses}>
              {prepContent}
            </a>
        );

    var ShowHide = Marshmellow.ShowHide,
        profileToggleComponent = (
        <ShowHide additionalClasses={profileTogClasses} prependContent={prependContents} toggleText={profileTogText} >
          {toggleContents}
        </ShowHide>
    );
    React.renderComponent(profileToggleComponent, $profileToggle.get(0));
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
