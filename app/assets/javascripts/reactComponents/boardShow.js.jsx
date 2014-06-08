/** @jsx React.DOM */

Marshmellow.BoardShow = React.createClass({
  getInitialState: function(){
    var myBoard = Marshmellow.allBoards.get(this.props.boardId);
   return { board: myBoard };
  },

  render: function(){
    var BoardDetail = Marshmellow.BoardDetail;
    var theTitle = this.state.board.get('title');
    return (
      <div className='boards-show'>
        <h2 className="editable">{theTitle}</h2>
        <BoardDetail boardModel={this.state.board} showTitle={false} />
      </div>
    );
  }
});
