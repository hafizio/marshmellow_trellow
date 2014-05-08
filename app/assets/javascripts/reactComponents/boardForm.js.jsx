/** @jsx React.DOM */

Marshmellow.BoardForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var titleInput = this.refs.boardTitle.getDOMNode();
    var boardTitle = titleInput.value.trim();
    this.props.saveBoard(boardTitle);
    titleInput.value = '';
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="boardTitle" placeholder="new board title..." />
        <input type="submit" />
      </form>
    )
  }
});
