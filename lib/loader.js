const highlight = require('./highlight');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();

  const example = this.options.example || {};
  const imports = example.imports || {};
  const requires = Object.keys(imports)
    .map(k => {
      const vs = k.split(',').map(v => v.trim());
      if (vs.length === 1) return `import ${vs[0]} from '${imports[k]}';`;
      return `import {${vs.join(', ')}} from '${imports[k]}';`;
    })
    .join('\n');
  const code = highlight(source, example.highlighter || {});

  const src = `
import React from 'react';
${requires}

export const Code = () => (
  <pre className="language-javascript">
    <code className="language-javascript" dangerouslySetInnerHTML={{__html: \`${code}\`}} />
  </pre>
);

export default ()  => (
  ${source}
);`;

  return src;
};
