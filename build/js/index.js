webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelloMessage = _react2.default.createClass({
	    displayName: 'HelloMessage',

	    render: function render() {
	        return _react2.default.createElement(
	            'h1',
	            null,
	            'Hello!'
	        );
	    }
	});

	(0, _reactDom.render)(_react2.default.createElement(HelloMessage, { message: 'World' }), document.getElementById('masterContainer'));

/***/ }
]);