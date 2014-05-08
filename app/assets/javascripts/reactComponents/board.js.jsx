/** @jsx React.DOM */

Marshmellow.Board = React.createClass({
  render: function() {
    var listNodes = [];
    this.props.boardModel.lists().each(function(listModel){
      var listNode = (
        <li>{listModel.get('title')}</li>
      );
      listNodes.push(listNode);
    });
    return (
      <div className='board'>
        <h2>{this.props.boardModel.get('title')}</h2>
        <small>Lists:</small>
        <ul>
          {listNodes}
        </ul>
      </div>
    );
  }
});
