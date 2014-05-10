/** @jsx React.DOM */
var BoardForm = Marshmellow.BoardForm;
var Board = Marshmellow.Board;

Marshmellow.BoardIndex = React.createClass({
  mixins: [BackboneMixin],
  updateBoards: function(newCollection) {
    this.setState({ backboneCollection: newCollection });
  },

  handleErrors: function(error1, error2, error3) {
    console.log('Error!');
    console.log(error1, error2, error3);
  },

  getInitialState: function() {
    return { backboneCollection: Marshmellow.allBoards };
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
        <Board boardModel={boardModel} />
      );
      boardNodes.push(boardNode);
    });
    return (
      <div className='boards-index'>
        <h3>My Boards</h3>
        <div className='row offset-row-third'>
          {boardNodes}
        </div>
        <div className='row' >
          <BoardForm saveBoard={this.handleNewBoard} />
        </div>
      </div>
    );
  }
});
