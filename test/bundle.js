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

	// var Button = require('./button');
	var Example = __webpack_require__(1);
	console.log('hello world');


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "example" },
	      React.createElement(
	        "div",
	        { className: "example-buttons" },
	        React.createElement(
	          Button,
	          { color: "blue" },
	          "blue"
	        ),
	        React.createElement(
	          Button,
	          { color: "red" },
	          "red"
	        ),
	        React.createElement(
	          Button,
	          { color: "yellow" },
	          "yellow"
	        )
	      ),
	      React.createElement(
	        "pre",
	        null,
	        React.createElement(
	          "code",
	          null,
	          "<div className=\"example-buttons\">\n  <Button color=\"blue\">blue</Button>\n  <Button color=\"red\">red</Button>\n  <Button color=\"yellow\">yellow</Button>\n</div>\n"
	        )
	      )
	    );
	  }
	});

/***/ }
/******/ ]);