webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _callers = __webpack_require__(178);

	var _callers2 = _interopRequireDefault(_callers);

	var _Language = __webpack_require__(185);

	var _Language2 = _interopRequireDefault(_Language);

	var _Header = __webpack_require__(186);

	var _Header2 = _interopRequireDefault(_Header);

	var _Screenshots = __webpack_require__(187);

	var _Screenshots2 = _interopRequireDefault(_Screenshots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IndexComponent = function (_Component) {
	    _inherits(IndexComponent, _Component);

	    function IndexComponent(props, context) {
	        _classCallCheck(this, IndexComponent);

	        var _this = _possibleConstructorReturn(this, (IndexComponent.__proto__ || Object.getPrototypeOf(IndexComponent)).call(this, props, context));

	        _this.state = {};
	        _this.displayName = 'IndexComponent';
	        return _this;
	    }

	    _createClass(IndexComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _callers2.default.fetchAppStoreData(function (res) {
	                debugger;
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Language2.default, null),
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(_Screenshots2.default, null)
	            );
	        }
	    }]);

	    return IndexComponent;
	}(_react.Component);

	;

	(0, _reactDom.render)(_react2.default.createElement(IndexComponent, { message: 'World' }), document.getElementById('masterContainer'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _superagent = __webpack_require__(179);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _constants = __webpack_require__(184);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a helper functions to call APIs

	// libs
	var callers = {
	    fetchAppStoreData: function fetchAppStoreData(callback) {
	        _superagent2.default.get('http://itunes.apple.com/lookup').accept('application/json').withCredentials().query({ id: _constants2.default.appstoreId }).timeout(7000) // error will be triggered if no responce
	        .end(function (err, res) {
	            callback(res);
	        });
	    }
	};

	// components
	exports.default = callers;
	module.exports = exports['default'];

/***/ },

/***/ 184:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var constants = {
	    appstoreId: 1036264023
	};

	exports.default = constants;
	module.exports = exports["default"];

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Language = _react2.default.createClass({
	    displayName: 'Language',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'languageComponent narrow' },
	            _react2.default.createElement(
	                'p',
	                null,
	                '\u0420\u0443\u0441\u0441\u043A\u0438\u0439'
	            )
	        );
	    }
	});

	exports.default = Language;
	module.exports = exports['default'];

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
	    _inherits(Header, _Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'iosClick',
	        value: function iosClick() {
	            window.location.href = 'https://itunes.apple.com/ru/app/id1036264023';
	        }
	    }, {
	        key: 'androidClick',
	        value: function androidClick() {
	            window.location.href = 'dist/android/Gymap 1.7.apk';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'headerComponent narrow' },
	                _react2.default.createElement('div', { className: 'logo' }),
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Gymap'
	                ),
	                _react2.default.createElement('div', { className: 'line' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'subheader' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        'visual workout log',
	                        _react2.default.createElement('br', null),
	                        'for professionals'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'downloadButton ios',
	                        onClick: this.iosClick.bind(this) },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Download in AppStore'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'downloadButton android',
	                        onClick: this.androidClick.bind(this) },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Download for Android'
	                    )
	                )
	            );
	        }
	    }]);

	    return Header;
	}(_react.Component);

	exports.default = Header;
	module.exports = exports['default'];

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _data = __webpack_require__(188);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Screenshots = _react2.default.createClass({
	    displayName: 'Screenshots',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'screenshotsComponent narrow' },
	            _react2.default.createElement(
	                'h2',
	                null,
	                'Screenshots'
	            ),
	            _react2.default.createElement('div', { className: 'line' }),
	            _react2.default.createElement(
	                'div',
	                { className: 'shotsContainer' },
	                _data2.default.screenshots.map(function (scrUrl, i) {
	                    return _react2.default.createElement('div', { key: i, style: {
	                            background: 'url(' + scrUrl + ') no-repeat',
	                            width: '5rem',
	                            height: '10rem',
	                            display: 'inline-block'
	                        } });
	                })
	            )
	        );
	    }
	});

	exports.default = Screenshots;
	module.exports = exports['default'];

/***/ },

/***/ 188:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var data = {
	    screenshots: ['http://a2.mzstatic.com/us/r30/Purple20/v4/54/aa/92/54aa92b8-3495-f9a3-c4cb-39a5159929f2/screen696x696.jpeg', 'http://a1.mzstatic.com/us/r30/Purple18/v4/ec/8b/ba/ec8bbae3-95de-ebf0-c322-955b1318a4ad/screen696x696.jpeg', 'http://a5.mzstatic.com/us/r30/Purple20/v4/79/56/c6/7956c6c3-00a1-5284-4372-d540e91e76b5/screen696x696.jpeg', 'http://a5.mzstatic.com/us/r30/Purple20/v4/79/56/c6/7956c6c3-00a1-5284-4372-d540e91e76b5/screen696x696.jpeg', 'http://a5.mzstatic.com/us/r30/Purple60/v4/9f/d5/1d/9fd51d74-2c06-0fc9-0beb-61728942b510/screen696x696.jpeg']
	};

	exports.default = data;
	module.exports = exports['default'];

/***/ }

});