var Button = React.createClass({
  displayName: 'Button',

  getDefaultProps() {
    return {
      color: 'gray'
    };
  },

  render() {
    return (
      <button className={`btn-${this.props.color}`}>{this.props.children}</button>
    );
  }
});

export default Button
