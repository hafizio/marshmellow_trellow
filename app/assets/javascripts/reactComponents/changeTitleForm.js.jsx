/** @jsx React.DOM */

Marshmellow.ChangeTitleForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return ({
      showForm: false,
      title: this.props.title
    });
  },

  handleFocus: function() {
    this.setState({showForm: true});
  },

  handleBlur: function() {
    this.handleSubmit();
    this.setState({showForm: false});
  },

  handleSubmit: function() {
    var titleInput = this.refs.boardTitle.getDOMNode();
    var newTitle = titleInput.value.trim();
    this.props.saveTitle(newTitle);
  },

  renderTitleForm: function() {
    return (
      <input
      type="text"
      ref="boardTitle"
      onBlur={this.handleBlur}
      onChange={this.handleChange}
      valueLink={this.linkState('title')} />
    );
  },

  renderTitle: function() {
    return (
      <div className="editable" onClick={this.handleFocus}>
        {this.state.title}
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
