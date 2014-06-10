/** @jsx React.DOM */

Marshmellow.BoardTitleForm = React.createClass({
  getInitialState: function() {
    return ({
      title: this.props.board.get('title')
    });
  },

  saveBoardTitle: function(boardTitle) {
    this.props.board.save({title: boardTitle}, {
      success: function(boardModel) {
        this.setState({title: boardModel.get('title')});
      }.bind(this)
    });
  },

  render: function() {
    var ChangeTitleForm = Marshmellow.ChangeTitleForm;
    return (
      <div className="board-title-form">
        <ChangeTitleForm
        title={this.state.title}
        saveTitle={this.saveBoardTitle}
        />
      </div>
    );
  }
});
