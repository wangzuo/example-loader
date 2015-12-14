module.exports = React.createClass({
  displayName: 'Button',

  render() {
    return (<button>{this.props.children}</button>);
  }
});
