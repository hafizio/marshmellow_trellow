/** @jsx React.DOM */

Marshmellow.List = React.createClass({
  render: function() {
    return (
      <li>{this.props.listModel.get('title')}</li>
    );
  }
});
