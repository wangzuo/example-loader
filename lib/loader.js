module.exports = function(source) {
  if(this.cacheable) this.cacheable();

  var example = this.options.example || {};
  var requires = Object.keys(example).map((k) => `import ${k} from '${example[k]}';`).join('\n');

  var src = `
import React from 'react';
${requires}

module.exports = () => (
  <div className="example">
    ${source}
    <pre>
      <code>
        {\`${source}\`}
      </code>
    </pre>
  </div>
);`;

  return src;
};
