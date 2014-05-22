/** @jsx React.DOM */

Marshmellow.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    $(".js-hide").addClass("hide");
    this.renderHeaderElements(options.$headerEl);
    this.$rootEl = options.$rootEl;
  },

  renderHeaderElements: function($headerEl) {
    this.renderProfileDropdown($headerEl);
    this.renderNewBoardDropdown($headerEl);
  },

  renderProfileDropdown: function($headerEl) {
    // TODO: there must be a better way to do this
    var $profileToggle = $($headerEl.find('#profile-toggle')),
        currentUserUsername = Marshmellow.currentUser.get('username') ||
          Marshmellow.currentUser.get('email'),
        toggleContents = (
          <ul className="horiz-nav">
            <li className="horiz-nav__header">{currentUserUsername}</li>
            <hr />
            <li>
              <a href="#" disabled="true">Profile</a>
            </li>
            <li>
              <a href="#" disabled="true">Help</a>
            </li>
            <hr />
            <li>
              <a href="/users/sign_out" data-method="delete" rel="nofollow">Log Out</a>
            </li>
          </ul>
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

  renderNewBoardDropdown: function($headerEl) {
    // TODO: there must be a better way to do this
    var $newBoardToggle = $($headerEl.find('#add-board-toggle')),
        toggleContents = (
          <ul className="horiz-nav">
            <li className="horiz-nav__header">Add (close button on left later)</li>
            <hr />
            <li>
              <a href="#" disabled="true">
                <b>New Board...</b>
                <p><small>A board is a collection of cards ordered in a list of
                lists.  Use it to manage a project, track a collection, or
                organize anything.</small></p>
              </a>
            </li>
            <li>
              <a href="#" disabled="true">
                <b>New Organization...</b>
                <p><small>An organization is a group of boards and people.
                Use it to group boards in your company, team, or family.
                </small></p>
              </a>
            </li>
          </ul>
        ),
        prependContents = (null);
      this._buildShowHide($newBoardToggle, toggleContents, prependContents);
    },

    _buildShowHide: function($toggleEl, toggleContents, prependContents) {
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
    React.unmountComponentAtNode(this.$rootEl.get(0));
    var BoardShow = Marshmellow.BoardShow;
    React.renderComponent(<BoardShow boardId={boardId} />, this.$rootEl.get(0));
  }
});
