module.exports = function(source) {
  // if(this.cacheable) this.cacheable();

  console.log('source', source);

  // return '"hello world"';

  var example = `
module.exports = React.createClass({
  render() {
    return (
      <div className="example">
        ${source}
        <pre>
          <code>
            {\`${source}\`}
          </code>
        </pre>
      </div>
    );
  }
});`;

console.log(example);

return example;
};
