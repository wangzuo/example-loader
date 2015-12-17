var React = require('react');

module.exports = React.createClass({
  displayName: 'Button',

  getDefaultProps() {
    return {
      color: 'gray'
    };
  },

  render() {
    return (
      <button className={`btn-${this.props.color}`}>
        {this.props.children}
      </button>
    );
  }
});
