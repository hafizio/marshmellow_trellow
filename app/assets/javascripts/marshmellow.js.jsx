/** @jsx React.DOM */

window.Marshmellow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    React.renderComponent(<MarshmellowBoard />, document.getElementById('backbone-index-boards'));
  }
};

$(document).ready(function(){
  Marshmellow.initialize();
});
