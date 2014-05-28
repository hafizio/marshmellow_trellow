/** @jsx React.DOM */

Marshmellow.ShowHide = React.createClass({
  getInitialState: function() {
    return { hidden: true };
  },

  toggleContent: function() {
    this.setState({ hidden: !this.state.hidden });
  },

  render: function() {
    // We could use JS to manually set the display:none property
    // But it's better to toggle a CSS class when you can
    var hideClass = (this.state.hidden) ? "hide" : "";
    return (
      <div className={"show-hide-" + this.props.classBlock}>
        {this.props.prependContents}
        <div className={"show-hide" + this.props.classBlock + "__toggle"}
          onClick={this.toggleContent} >
          {this.props.toggleEl}
        </div>
        <div className={"show-hide-" + this.props.classBlock + "__content"}
          ref="content">
          {this.props.children}
        </div>
      </div>
    )
  }

});
