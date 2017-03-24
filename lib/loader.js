const highlight = require('./highlight');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();

  const example = this.options.example || {};
  const code = highlight(source, example.highlighter || {});

  const src = `
${source}

export const Code = () => (
  <pre className="language-javascript">
    <code className="language-javascript" dangerouslySetInnerHTML={{__html: \`${code}\`}} />
  </pre>
);`;

  return src;
};
