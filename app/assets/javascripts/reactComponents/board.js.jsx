/** @jsx React.DOM */

var List = Marshmellow.List;
Marshmellow.Board = React.createClass({
  render: function() {
    var boardUrl = "#/boards/" + this.props.boardModel.get('id');
    var numLists = this.props.boardModel.lists().length;
    return (
      <a href={boardUrl} className='board-show-link col-3 offset-col-third'>
        <h4>{this.props.boardModel.get('title')}</h4>
        <p><small>({numLists} Lists)</small></p>
      </a>
    );
  }
});
