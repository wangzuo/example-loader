/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _grid = __webpack_require__(5);

var _button = __webpack_require__(4);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _grid.Row,
    null,
    _react2.default.createElement(
      _grid.Col,
      { col: 10 },
      _react2.default.createElement(
        _button2.default,
        null,
        'gray'
      ),
      _react2.default.createElement(
        _button2.default,
        { color: 'blue' },
        'blue'
      ),
      _react2.default.createElement(
        _button2.default,
        { color: 'red' },
        'red'
      ),
      _react2.default.createElement(
        _button2.default,
        { color: 'yellow' },
        'yellow'
      )
    )
  );
};

var Code = exports.Code = function Code() {
  return _react2.default.createElement(
    'pre',
    { className: 'language-javascript' },
    _react2.default.createElement('code', { className: 'language-javascript', dangerouslySetInnerHTML: { __html: '<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./grid\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'./button\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Row<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Col col<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button<span class="token operator">></span>gray<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"blue"</span><span class="token operator">></span>blue<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>red<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"yellow"</span><span class="token operator">></span>yellow<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n' } })
  );
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Example Loader'
    ),
    _react2.default.createElement(_button2.default, null),
    _react2.default.createElement(_button.Code, null)
  );
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var color = _ref.color,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: 'btn-' + color },
    children
  );
};

Button.defaultProps = {
  color: 'gray'
};

exports.default = Button;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = exports.Row = function Row(_ref) {
  var col = _ref.col,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "row" },
    children
  );
};

var Col = exports.Col = function Col(_ref2) {
  var col = _ref2.col,
      children = _ref2.children;
  return _react2.default.createElement(
    "div",
    { className: "col col-" + col },
    children
  );
};

/***/ })
/******/ ]);