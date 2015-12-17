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

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var ButtonExample = __webpack_require__(3);

	ReactDOM.render(React.createElement(ButtonExample, null), document.getElementById('app'));

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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(4);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  return _react2.default.createElement(
	    'div',
	    { className: 'example' },
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
	    ),
	    _react2.default.createElement(
	      'pre',
	      null,
	      _react2.default.createElement(
	        'code',
	        null,
	        '<Button>gray</Button>\n<Button color="blue">blue</Button>\n<Button color="red">red</Button>\n<Button color="yellow">yellow</Button>\n'
	      )
	    )
	  );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'Button',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: 'gray'
	    };
	  },
	  render: function render() {
	    return React.createElement(
	      'button',
	      { className: 'btn-' + this.props.color },
	      this.props.children
	    );
	  }
	});

/***/ }
/******/ ]);