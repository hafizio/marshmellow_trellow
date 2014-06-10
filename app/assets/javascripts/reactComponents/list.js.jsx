/** @jsx React.DOM */

Marshmellow.List = React.createClass({
  render: function() {
    var ListTitleForm = Marshmellow.ListTitleForm;
    return (
      <ListTitleForm list={this.props.listModel} />
    );
  }
});
