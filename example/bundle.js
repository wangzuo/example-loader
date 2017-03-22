/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _button = __webpack_require__(3);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Code = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(4);

	var _button2 = _interopRequireDefault(_button);

	var _grid = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Code = exports.Code = function Code() {
	  return _react2.default.createElement(
	    'pre',
	    { className: 'language-javascript' },
	    _react2.default.createElement('code', { className: 'language-javascript', dangerouslySetInnerHTML: { __html: '<span class="token operator">&lt;</span>Row<span class="token operator">></span>\n  <span class="token operator">&lt;</span>Col col<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Button<span class="token operator">></span>gray<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"blue"</span><span class="token operator">></span>blue<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>red<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"yellow"</span><span class="token operator">></span>yellow<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>\n' } })
	  );
	};

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _react = __webpack_require__(1);

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

/***/ }
/******/ ]);