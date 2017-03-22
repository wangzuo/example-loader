const highlight = require('./highlight');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();

  const example = this.options.example || {};
  const requires = Object.keys(example)
    .map(k => {
      const vs = k.split(',').map(v => v.trim());
      if (vs.length === 1) return `import ${vs[0]} from '${example[k]}';`;
      return `import {${vs.join(', ')}} from '${example[k]}';`;
    })
    .join('\n');
  const code = highlight(source);

  const src = `
import React from 'react';
${requires}

export const Code = () => (
  <div dangerouslySetInnerHTML={{__html: \`${code}\`}} />
);

export default ()  => (
  ${source}
);`;

  return src;
};
