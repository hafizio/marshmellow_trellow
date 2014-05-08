/** @jsx React.DOM */

window.Marshmellow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var BoardIndex = Marshmellow.BoardIndex;
    React.renderComponent(<BoardIndex />, document.getElementById('backbone-index-boards'));
  }
};

$(document).ready(function(){
  Marshmellow.initialize();
});
