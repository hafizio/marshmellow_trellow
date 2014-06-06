/** @jsx React.DOM */

Marshmellow.ProfileDropdown = React.createClass({
  _buildShowHide: function(toggleEl, toggleContents, classBlock, renderIntoEl) {
    return this._renderShowHide(toggleEl, toggleContents, classBlock, renderIntoEl);
  },

  _renderShowHide: function(toggleEl, toggleContents, classBlock, renderIntoEl) {
    var ShowHide = Marshmellow.ShowHide,
        toggleComponent = (
        <ShowHide toggleEl={toggleEl} classBlock={classBlock}>
          {toggleContents}
        </ShowHide>
    );
    return toggleComponent;
  },

  render: function() {
    var currentUserName = Marshmellow.currentUser.get('username') ||
      Marshmellow.currentUser.get('email');
    var profileToggleEl = (
      <div id="profile-toggle" class="button-group">
        <a href="#" id="profile-toggle__avatar-button" class="button button-default header-gravatar" disabled="true">
        <img src={Marshmellow.currentUser.avatarUrl} />
        </a>
        <a href="#" class="button button-default" disabled="true">{currentUserName}</a>
      </div>
    );
    // TODO: there must be a better way to do this
    var toggleContents = (
          <ul className="horiz-nav">
            <li className="horiz-nav__header">{currentUserName}</li>
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
        classBlock = "profile-dropdown",
        renderIntoEl = $('#profile-dropdown').get(0);
    return ( this._buildShowHide(profileToggleEl, toggleContents, classBlock, renderIntoEl));
  }
});
