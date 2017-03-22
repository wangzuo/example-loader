const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const SyntaxHighlighter = require('react-syntax-highlighter').default;
const { docco } = require('react-syntax-highlighter/dist/styles');

module.exports = function(code) {
  const el = React.createElement(
    SyntaxHighlighter,
    { language: 'javascript', style: docco },
    code
  );
  return renderToStaticMarkup(el);
};
