/** @jsx React.DOM */

Marshmellow.BoardShow = React.createClass({
  getInitialState: function(){
    var myBoard = Marshmellow.allBoards.get(this.props.boardId);
   return { board: myBoard };
  },

  render: function(){
    var BoardDetail = Marshmellow.BoardDetail;
    var BoardTitleForm = Marshmellow.BoardTitleForm;
    var theTitle = this.state.board.get('title');
    return (
      <div className='boards-show'>
        <BoardTitleForm board={this.state.board} />
        <BoardDetail boardModel={this.state.board} showTitle={false} />
      </div>
    );
  }
});
