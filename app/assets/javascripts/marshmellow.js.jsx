window.Marshmellow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Marshmellow.allBoards = new Marshmellow.Collections.Boards([]);
    Marshmellow.allBoards.fetch({
      success: function() {
        boardRouter = new Marshmellow.Routers.BoardRouter({
          $rootEl: $('#backbone-index-boards'),
          $headerEl: $('#mm-main-header')
        });
        Backbone.history.start();
      }
    }); //async operation
  }
};

$(document).ready(function(){
  Marshmellow.initialize();
});
