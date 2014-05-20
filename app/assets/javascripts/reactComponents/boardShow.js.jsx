/** @jsx React.DOM */

Marshmellow.BoardShow = React.createClass({
  getInitialState: function(){
    debugger;
    var myBoard = Marshmellow.allBoards.get(this.props.boardId);
   return { board: myBoard };
  },

  render: function(){
    var BoardDetail = Marshmellow.BoardDetail;
    return (
      <h1>Show page for: {this.state.board.get('title')}</h1>
      <BoardDetail boardModel={this.state.board} showTitle={false} />
    );
  }
});
