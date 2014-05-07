// Patterned after the ToDoMVC React + Backbone example mixin
// https://github.com/tastejs/todomvc/blob/gh-pages/labs/architecture-examples/react-backbone/js/app.jsx
//
var BackboneMixin = {
  componentDidMount: function() {
    this.state.backboneCollection.on('add remove change', this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount: function() {
    this.state.backboneCollection.off(null, null, this);
  }
};
