/** @jsx React.DOM */

Marshmellow.List = React.createClass({
  render: function() {
    return (
      <li className="editable">{this.props.listModel.get('title')}</li>
    );
  }
});
