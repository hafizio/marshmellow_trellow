// Patterned after the ToDoMVC React + Backbone example mixin
// https://github.com/tastejs/todomvc/blob/gh-pages/labs/architecture-examples/react-backbone/js/app.jsx
//
Marshmellow.BackboneMixin = {
  componentDidMount: function() {
    this.backboneCollection.on('add remove change', this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount: function() {
    this.backboneCollection.off(null, null, this);
  }
};
