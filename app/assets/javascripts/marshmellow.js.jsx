window.Marshmellow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Marshmellow.currentUser is set in shared/bootstrap
    Marshmellow.allBoards = new Marshmellow.Collections.Boards([]);
    Marshmellow.allBoards.fetch({
      success: function() {
        boardRouter = new Marshmellow.Routers.BoardRouter({
          $rootEl: $('#backbone-index-boards'),
          $profileDropdownEl: $('#profile-dropdown')
        });
        Backbone.history.start();
      }
    }); //async operation
  }
};

$(document).ready(function(){
  Marshmellow.initialize();
});
