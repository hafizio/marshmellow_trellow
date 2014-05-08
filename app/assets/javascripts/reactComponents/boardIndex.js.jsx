/** @jsx React.DOM */
var BoardForm = Marshmellow.BoardForm;

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
      var listNodes = [];
      boardModel.lists().each(function(listModel){
        var listNode = (
          <li>{listModel.get('title')}</li>
        );
        listNodes.push(listNode);
      });
      var boardNode = (
        <div className='board'>
          <h2>{boardModel.get('title')}</h2>
          <small>Lists:</small>
          <ul>
            {listNodes}
          </ul>
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
