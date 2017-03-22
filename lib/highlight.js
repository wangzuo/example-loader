const Prism = require('prismjs');

module.exports = function(code, options) {
  return Prism.highlight(code, Prism.languages.javascript);
};
