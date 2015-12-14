module.exports = function(source) {
  if(this.cacheable) this.cacheable();

  var example = this.options.example || {};
  var requires = Object.keys(example).map((k) => `import ${k} from '${example[k]}';`).join('\n');

  var src = `
${requires}

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

  return src;
};
