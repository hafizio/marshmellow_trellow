/** @jsx React.DOM */

var MarshmellowBoard = React.createClass({
//  mixins: [Marshmellow.BackboneMixin],
  updateBoards: function(newCollection) {
    this.setState({ backboneCollection: newCollection });
  },

  handleErrors: function(error1, error2, error3) {
    console.log('Error!');
    console.log(error1, error2, error3);
  },

  getInitialState: function() {
    var boardsCollection = new Marshmellow.Collections.Boards([]);
    boardsCollection.fetch({
      success: this.updateBoards,
      error: this.handleErrors
    }); //async operation
    return { backboneCollection: boardsCollection };
  },

  render: function() {
    var boardNodes = [];
    this.state.backboneCollection.each(function(boardModel) {
      var boardNode = (
        <div className='board'>
          <p>{boardModel.get('title')}</p>
        </div>
      );
      boardNodes.push(boardNode);
    });
    return (
      <div className='boards-index'>
        <h1>Boards</h1>
        {boardNodes}
      </div>
    );
  }
});
