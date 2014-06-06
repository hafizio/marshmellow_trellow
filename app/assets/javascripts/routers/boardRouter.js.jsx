/** @jsx React.DOM */

Marshmellow.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.renderHeaderElements(options.$headerEl);
    this.$rootEl = options.$rootEl;
  },

  renderHeaderElements: function($headerEl) {
    React.renderComponent(Marshmellow.ProfileDropdown, $headerEl);
    this.renderNewBoardDropdown($headerEl.get(0));
  },


  _buildShowHide: function(toggleEl, toggleContents, classBlock, renderIntoEl) {
    this._renderShowHide(toggleEl, toggleContents, classBlock, renderIntoEl);
  },

  _renderShowHide: function(toggleEl, toggleContents, classBlock, renderIntoEl) {
    var ShowHide = Marshmellow.ShowHide,
        toggleComponent = (
        <ShowHide toggleEl={toggleEl} classBlock={classBlock}>
          {toggleContents}
        </ShowHide>
    );
    React.renderComponent(toggleComponent, renderIntoEl);
  },

  renderNewBoardDropdown: function($headerEl) {
    // TODO: there must be a better way to do this
    // TODO: refactor this to be similar to the other dropdown
//    var $newBoardToggle = $($headerEl.find('#add-board-toggle')),
//        toggleContents = (
//          <ul className="horiz-nav">
//            <li className="horiz-nav__header">Add (close button on left later)</li>
//            <hr />
//            <li>
//              <a href="#" disabled="true">
//                <b>New Board...</b>
//                <p><small>A board is a collection of cards ordered in a list of
//                lists.  Use it to manage a project, track a collection, or
//                organize anything.</small></p>
//              </a>
//            </li>
//            <li>
//              <a href="#" disabled="true">
//                <b>New Organization...</b>
//                <p><small>An organization is a group of boards and people.
//                Use it to group boards in your company, team, or family.
//                </small></p>
//              </a>
//            </li>
//          </ul>
//        ),
//        renderIntoEl = $('#add-board-dropdown').get(0),
//        prependContents = (null);
//      this._buildShowHide($newBoardToggle, toggleContents, prependContents, renderIntoEl);
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
