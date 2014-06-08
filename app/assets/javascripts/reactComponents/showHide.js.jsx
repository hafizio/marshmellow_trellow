/** @jsx React.DOM */

Marshmellow.ShowHide = React.createClass({
  getInitialState: function() {
    return { hidden: true };
  },

  toggleContent: function() {
    this.setState({ hidden: !this.state.hidden });
  },

  render: function() {
    return (
      <div className={"show-hide-" + this.props.classBlock}>
        <div className={this.props.classBlock + "-show-hide__toggle"}>
          <button
          className={this.props.classBlock + "-show-hide-" + "__toggle-button button button-inverse"}
          type="button"
          onClick={this.toggleContent}>
            {this.props.label}
          </button>
        </div>
        {this._renderContent()}
      </div>
    )
  },

  _renderContent: function() {
    if (!this.state.hidden) {
      return (
        <div
         className={this.props.classBlock + "-show-hide__content"}
         ref="content">
           {this.props.children}
        </div>
      );
    }
  }
});
