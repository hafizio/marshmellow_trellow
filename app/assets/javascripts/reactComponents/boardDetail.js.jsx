/** @jsx React.DOM */

var List = Marshmellow.List;
Marshmellow.BoardDetail = React.createClass({
  render: function() {
    var listNodes = [];
    this.props.boardModel.lists().each(function(listModel){
      var listNode = (
        <List listModel={listModel} />
      );
      listNodes.push(listNode);
    });
    var titleToShow = (this.props.showTitle) ? (<h2>{this.props.boardModel.get('title')}</h2>) : null;

    return (
      <div className='board'>
        {titleToShow}
        <small>Lists:</small>
        <ul>
          {listNodes}
        </ul>
      </div>
    );
  }
});
