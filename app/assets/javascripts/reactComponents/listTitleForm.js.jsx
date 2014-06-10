/** @jsx React.DOM */

Marshmellow.ListTitleForm = React.createClass({
  getInitialState: function() {
    return ({
      title: this.props.list.get('title')
    });
  },

  saveListTitle: function(listTitle) {
    this.props.list.save({title: listTitle}, {
      success: function(listModel) {
        this.setState({title: listModel.get('title)')});
      }.bind(this)
    });
  },

  render: function() {
    var ChangeTitleForm = Marshmellow.ChangeTitleForm;
    return (
      <div className="list-title-form">
        <ChangeTitleForm
          title={this.state.title}
          saveTitle={this.saveListTitle}
        />
      </div>
    );
  }
});
