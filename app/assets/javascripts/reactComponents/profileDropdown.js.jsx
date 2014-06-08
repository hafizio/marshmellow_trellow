/** @jsx React.DOM */

var ShowHide = Marshmellow.ShowHide;

Marshmellow.ProfileDropdown = React.createClass({
  render: function() {
    var currentUserName = Marshmellow.currentUser.get('username') ||
      Marshmellow.currentUser.get('email');
    var toggleContents = (
          <ul className="horiz-nav">
            <li className="horiz-nav__header">{currentUserName}</li>
            <hr />
            <li>
              <a href="#" disabled="true">Profile</a>
            </li>
            <li>
              <a href="#" disabled="true">Settings</a>
            </li>
            <li>
              <a href="#" disabled="true">Cards</a>
            </li>
            <hr />
            <li>
              <a href="/users/sign_out" data-method="delete" rel="nofollow">Log Out</a>
            </li>
          </ul>
        ),
        classBlock = "profile-dropdown";
    return (
        <div className={classBlock}>
          <ShowHide
           label={currentUserName}
           classBlock={classBlock}>
            {toggleContents}
          </ShowHide>
        </div>
       );
  }
});
