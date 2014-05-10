window.Marshmellow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Marshmellow.allBoards = new Marshmellow.Collections.Boards([]);
    Marshmellow.allBoards.fetch({}); //async operation
    boardRouter = new Marshmellow.Routers.BoardRouter({
      $rootEl: document.getElementById('backbone-index-boards')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Marshmellow.initialize();
});
