/** @jsx React.DOM */

Marshmellow.BoardTitleForm = React.createClass({
  getInitialState: function() {
    return ({showForm: false});
  },

  handleFocus: function() {
    this.setState({showForm: true});
  },

  handleBlur: function() {
    //this.handleSubmit();
    this.setState({showForm: false});
  },

  handleSubmit: function() {
    var titleInput = this.refs.boardTitle.getDOMNode();
    var boardTitle = titleInput.value.trim();
    this.props.saveBoard(boardTitle);
  },

  renderTitleForm: function() {
    return (
      <input
      type="text"
      ref="boardTitle"
      onBlur={this.handleBlur}
      value={this.props.board.get('title')} />
    );
  },

  renderTitle: function() {
    return (
      <div className="editable" onClick={this.handleFocus}>
        {this.props.board.get('title')}
      </div>
    );
  },

  componentDidUpdate: function() {
   if (this.state.showForm) {
     this.getDOMNode().focus();
   }
  },

  render: function() {
    var currentState = (this.state.showForm) ? this.renderTitleForm() : this.renderTitle();
    return currentState;
  }
});
