/** @jsx React.DOM */

var MarshmellowBoard = React.createClass({
  mixins: [BackboneMixin],
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

  handleNewBoard: function(boardTitle) {
    this.state.backboneCollection.create({title: boardTitle}, {
      error: this.handleErrors
    });
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
        <BoardForm saveBoard={this.handleNewBoard} />
      </div>
    );
  }
});
