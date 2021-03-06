webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(65);

var _reduxThunk = __webpack_require__(111);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(211);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(162);

var _reactRouter = __webpack_require__(53);

var _App = __webpack_require__(195);

var _App2 = _interopRequireDefault(_App);

var _Sale = __webpack_require__(231);

var _Sale2 = _interopRequireDefault(_Sale);

var _New = __webpack_require__(237);

var _New2 = _interopRequireDefault(_New);

var _Group = __webpack_require__(241);

var _Group2 = _interopRequireDefault(_Group);

var _Car = __webpack_require__(242);

var _Car2 = _interopRequireDefault(_Car);

var _Mine = __webpack_require__(243);

var _Mine2 = _interopRequireDefault(_Mine);

var _Detail = __webpack_require__(244);

var _Detail2 = _interopRequireDefault(_Detail);

var _store = __webpack_require__(106);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(272);
//-------- css end --------//

//---------- js -----------//

//---------- css -----------//
console.log(0);

var React = __webpack_require__(4);
var ReactDOM = __webpack_require__(132);

ReactDOM.render(React.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    React.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        React.createElement(
            _reactRouter.Route,
            { path: "/", component: _App2.default },
            React.createElement(_reactRouter.IndexRedirect, { to: "/sale" }),
            React.createElement(_reactRouter.Route, { path: "/sale", component: _Sale2.default }),
            React.createElement(_reactRouter.Route, { path: "/group", component: _Group2.default }),
            React.createElement(_reactRouter.Route, { path: "/new", component: _New2.default }),
            React.createElement(_reactRouter.Route, { path: "/car", component: _Car2.default }),
            React.createElement(_reactRouter.Route, { path: "/mine", component: _Mine2.default }),
            React.createElement(_reactRouter.Route, { path: "/detail/:id", component: _Detail2.default }),
            React.createElement(_reactRouter.Redirect, { from: "*", to: "/sale" })
        )
    )
), document.getElementById("app"));

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(106);

var _store2 = _interopRequireDefault(_store);

var _actionCreator = __webpack_require__(212);

var _actionCreator2 = _interopRequireDefault(_actionCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props, context) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'app-all' },
                this.props.children
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = {
    todos: []
};
var count = 0;

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_TODOS':
            state.todos = state.todos.concat(action.todos);
            count = state.todos.length;
            console.log(state, 111);
            return state;break;
        case 'ADD_TODO':
            state.todos.push({
                id: ++count,
                title: action.title,
                isFinished: false
            });
            return state;break;
        default:
            return state;break;
    }
};

exports.default = reducer;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(41);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionCreator = {
    getTodos: function getTodos() {
        _axios2.default.get("./public/data/......").then(function (res) {
            store.dispatch({
                type: 'GET_TODOS',
                todos: res.data
            });
        });
    },
    addTodo: function addTodo(new_title) {
        store.dispatch({
            type: 'ADD_TODO',
            title: new_title
        });
    }
};

exports.default = actionCreator;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Main = __webpack_require__(235);

var _Main2 = _interopRequireDefault(_Main);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sale = function (_React$Component) {
    _inherits(Sale, _React$Component);

    function Sale(props, context) {
        _classCallCheck(this, Sale);

        return _possibleConstructorReturn(this, (Sale.__proto__ || Object.getPrototypeOf(Sale)).call(this, props, context));
    }

    _createClass(Sale, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(_Main2.default, null),
                _react2.default.createElement(_Nav2.default, { type: "sale" })
            );
        }
    }]);

    return Sale;
}(_react2.default.Component);

exports.default = Sale;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(42);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props, context) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));

        _this.state = {
            hotSearch: []
        };
        return _this;
    }

    _createClass(Header, [{
        key: "getHotSearch",
        value: function getHotSearch() {
            var _this2 = this;

            _fetch2.default.get('http://localhost:8000/public/data/hotSearch.json').then(function (res) {
                // console.log(res.json);
                return res.json();
            }).then(function (data) {
                // console.log(data);
                _this2.setState({
                    hotSearch: data
                });
            });
        }
    }, {
        key: "showHotSearch",
        value: function showHotSearch() {
            return this.state.hotSearch.map(function (item, i) {
                return _react2.default.createElement(
                    "div",
                    { className: "swiper-slide", key: i },
                    item.word
                );
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getHotSearch();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "header-c" },
                _react2.default.createElement(
                    "div",
                    { className: "swiper-container hot-search-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "swiper-wrapper" },
                        this.showHotSearch()
                    )
                ),
                _react2.default.createElement("i", { className: "iconfont icon-sousuo1 search-c" })
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.swiper = new Swiper(".hot-search-c", {
                freeMode: true,
                slidesPerView: 'auto',
                freeModeSticky: true,
                freeModeMomentumRatio: 0.3
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.swiper.update();
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = get;

__webpack_require__(117);

__webpack_require__(118);

function get(url) {

	return fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json,text/plain,*/*'
		}
	});
}

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Shop = __webpack_require__(236);

var _Shop2 = _interopRequireDefault(_Shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props, context) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, context));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "main-c" },
                _react2.default.createElement("div", { id: "hui-c" }),
                _react2.default.createElement(
                    "div",
                    { id: "temai-c" },
                    "\u4ECA\u65E5\u7279\u5356\xB7\u6BCF\u5929\u65E99\u70B9\u51C6\u65F6\u4E0A\u65B0"
                ),
                _react2.default.createElement(_Shop2.default, { storeName: "\u9999\u5948\u5A03\u5A03", url: "http://localhost:8000/public/data/recommend_xiangnai.json", img: "https://b1.hucdn.com/upload/brand/1701/06/89804638951411_200x100.png" }),
                _react2.default.createElement(_Shop2.default, { storeName: "\u5999\u5999\u8FEA\u8FEA", url: "http://localhost:8000/public/data/recommend_miaodi.json", img: "https://b1.hucdn.com/upload/brand/1706/08/11137176110000_200x100.jpg" }),
                _react2.default.createElement(_Shop2.default, { storeName: "OCEAN", url: "http://localhost:8000/public/data/recommend_ocean.json", img: "https://b1.hucdn.com/upload/brand/1507/24/31181129739971_200x100.jpg" })
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(41);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shop = function (_React$Component) {
    _inherits(Shop, _React$Component);

    function Shop(props, context) {
        _classCallCheck(this, Shop);

        var _this = _possibleConstructorReturn(this, (Shop.__proto__ || Object.getPrototypeOf(Shop)).call(this, props, context));

        _this.state = {
            goods: []
        };
        return _this;
    }

    _createClass(Shop, [{
        key: "getGoods",
        value: function getGoods() {
            var _this2 = this;

            _axios2.default.get(this.props.url).then(function (res) {
                //console.log(res.data);
                _this2.setState({
                    goods: res.data
                });
            });
        }
    }, {
        key: "showGoods",
        value: function showGoods() {
            if (!this.state.goods.length) {
                return;
            }
            return this.state.goods.map(function (item, i) {
                return _react2.default.createElement(
                    "div",
                    { id: "goods-box-c", key: i },
                    _react2.default.createElement("img", { src: item.img, alt: "" }),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "span",
                            { className: "price" },
                            "\uFFE5",
                            item.price
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "oldprice" },
                            "\uFFE5",
                            item.oldprice
                        )
                    ),
                    _react2.default.createElement(
                        "h4",
                        null,
                        item.name
                    )
                );
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getGoods();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "store-box-c" },
                _react2.default.createElement(
                    "div",
                    { id: "store-box-header-c" },
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement("img", { src: this.props.img, alt: "" }),
                        _react2.default.createElement(
                            "a",
                            { href: "" },
                            this.props.storeName
                        )
                    ),
                    _react2.default.createElement("i", { className: "iconfont icon-jiantou-copy1" })
                ),
                _react2.default.createElement(
                    "div",
                    { id: "goods-boxs-c" },
                    this.showGoods()
                ),
                _react2.default.createElement("div", { id: "hui-c" })
            );
        }
    }]);

    return Shop;
}(_react2.default.Component);

exports.default = Shop;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

var _NewHeader = __webpack_require__(238);

var _NewHeader2 = _interopRequireDefault(_NewHeader);

var _NewMain = __webpack_require__(240);

var _NewMain2 = _interopRequireDefault(_NewMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var New = function (_React$Component) {
    _inherits(New, _React$Component);

    function New(props, context) {
        _classCallCheck(this, New);

        return _possibleConstructorReturn(this, (New.__proto__ || Object.getPrototypeOf(New)).call(this, props, context));
    }

    _createClass(New, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                _react2.default.createElement(_NewHeader2.default, null),
                _react2.default.createElement(_NewMain2.default, null),
                _react2.default.createElement(_Nav2.default, { type: "new" })
            );
        }
    }]);

    return New;
}(_react2.default.Component);

exports.default = New;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(42);

var _fetch2 = _interopRequireDefault(_fetch);

var _NewBanner = __webpack_require__(239);

var _NewBanner2 = _interopRequireDefault(_NewBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewHeader = function (_React$Component) {
	_inherits(NewHeader, _React$Component);

	function NewHeader(props, context) {
		_classCallCheck(this, NewHeader);

		var _this = _possibleConstructorReturn(this, (NewHeader.__proto__ || Object.getPrototypeOf(NewHeader)).call(this, props, context));

		_this.state = {
			NewDate: []
		};
		return _this;
	}

	_createClass(NewHeader, [{
		key: "getNewDate",
		value: function getNewDate() {
			var _this2 = this;

			_fetch2.default.get('http://localhost:8000/public/data/newDate.json').then(function (res) {
				return res.json();
			}).then(function (data) {
				//console.log(data)
				_this2.setState({
					NewDate: data
				});
			});
		}
	}, {
		key: "showNewDate",
		value: function showNewDate() {
			return this.state.NewDate.map(function (item, i) {
				return _react2.default.createElement(
					"div",
					{ className: "swiper-slide  newDate-slide-z", key: item.id },
					_react2.default.createElement(
						"p",
						{ className: "time" },
						item.date
					),
					_react2.default.createElement(
						"p",
						{ className: "status" },
						item.word
					)
				);
			});
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			this.getNewDate();
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "newHeader" },
				_react2.default.createElement(
					"div",
					{ className: "newDate-content-z" },
					_react2.default.createElement(
						"div",
						{ className: "swiper-container newDate-z" },
						_react2.default.createElement(
							"div",
							{ className: "swiper-wrapper newDate-wrapper-z" },
							this.showNewDate()
						)
					)
				),
				_react2.default.createElement(_NewBanner2.default, null)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.swiper = new Swiper(".newDate-z", {
				freeMode: true,
				slidesPerView: 'auto',
				freeModeSticky: true,
				freeModeMomentumRatio: 0.2
			});
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.swiper.update();
		}
	}]);

	return NewHeader;
}(_react2.default.Component);

exports.default = NewHeader;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(42);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewBanner = function (_React$Component) {
	_inherits(NewBanner, _React$Component);

	function NewBanner(props, context) {
		_classCallCheck(this, NewBanner);

		var _this = _possibleConstructorReturn(this, (NewBanner.__proto__ || Object.getPrototypeOf(NewBanner)).call(this, props, context));

		_this.state = {
			NewNav: []
		};
		return _this;
	}

	_createClass(NewBanner, [{
		key: 'getNewNav',
		value: function getNewNav() {
			var _this2 = this;

			_fetch2.default.get('http://localhost:8000/public/data/newHotSearch.json').then(function (res) {
				//console.log(res.json())
				return res.json();
			}).then(function (data) {
				//console.log(data)
				_this2.setState({
					NewNav: data
				});
			});
		}
	}, {
		key: 'showNewSearch',
		value: function showNewSearch() {
			return this.state.NewNav.map(function (item, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'swiper-slide banner-slide-z', key: item.id },
					item.word
				);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.getNewNav();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'swiper-container new-search-z' },
				_react2.default.createElement(
					'div',
					{ className: 'swiper-wrapper new-banner-z' },
					this.showNewSearch()
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.Swiper = new Swiper(".new-search-z", {
				freeMode: true,
				slidesPerView: 'auto',
				freeModeSticky: true,
				freeModeMomentumRatio: 0.2
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.Swiper.update();
		}
	}]);

	return NewBanner;
}(_react2.default.Component);

exports.default = NewBanner;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(42);

var _fetch2 = _interopRequireDefault(_fetch);

var _axios = __webpack_require__(41);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewMain = function (_React$Component) {
	_inherits(NewMain, _React$Component);

	function NewMain(props, context) {
		_classCallCheck(this, NewMain);

		var _this = _possibleConstructorReturn(this, (NewMain.__proto__ || Object.getPrototypeOf(NewMain)).call(this, props, context));

		_this.state = {
			list: []
		};
		return _this;
	}

	_createClass(NewMain, [{
		key: 'getList',
		value: function getList() {
			_axios2.default.get('http://localhost:8000/beibei_api/discovery/newly_recom_get/1-1509545964.html').then(function (res) {
				console.log(res.data);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.getList();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'newMain' },
				'\u51D1\u6570'
			);
		}
	}]);

	return NewMain;
}(_react2.default.Component);

exports.default = NewMain;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_React$Component) {
    _inherits(Group, _React$Component);

    function Group(props, context) {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props, context));
    }

    _createClass(Group, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                "GROUP\u90E8\u5206",
                _react2.default.createElement(_Nav2.default, { type: "group" })
            );
        }
    }]);

    return Group;
}(_react2.default.Component);

exports.default = Group;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = function (_React$Component) {
    _inherits(Car, _React$Component);

    function Car(props, context) {
        _classCallCheck(this, Car);

        return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, props, context));
    }

    _createClass(Car, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                "CAR\u90E8\u5206",
                _react2.default.createElement(_Nav2.default, { type: "car" })
            );
        }
    }]);

    return Car;
}(_react2.default.Component);

exports.default = Car;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_React$Component) {
    _inherits(Mine, _React$Component);

    function Mine(props, context) {
        _classCallCheck(this, Mine);

        return _possibleConstructorReturn(this, (Mine.__proto__ || Object.getPrototypeOf(Mine)).call(this, props, context));
    }

    _createClass(Mine, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                "MINE\u90E8\u5206",
                _react2.default.createElement(_Nav2.default, { type: "mine" })
            );
        }
    }]);

    return Mine;
}(_react2.default.Component);

exports.default = Mine;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(30);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
    _inherits(Detail, _React$Component);

    function Detail(props, context) {
        _classCallCheck(this, Detail);

        return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props, context));
    }

    _createClass(Detail, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "all" },
                "DETAIL\u90E8\u5206",
                _react2.default.createElement(_Nav2.default, { type: "detail" })
            );
        }
    }]);

    return Detail;
}(_react2.default.Component);

exports.default = Detail;

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props, context) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props, context));

        _this.state = {
            active: props.type || "sale"
        };
        return _this;
    }

    _createClass(Nav, [{
        key: "change",
        value: function change(type) {
            this.setState({
                active: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var active = this.state.active;
            return _react2.default.createElement(
                "div",
                { id: "footer" },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/sale", className: active == 'sale' ? 'active' : '' },
                    _react2.default.createElement("i", { className: "iconfont icon-biaoqian" }),
                    "\u4ECA\u65E5\u7279\u5356"
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/group", className: active == 'group' ? 'active' : '' },
                    _react2.default.createElement("i", { className: "iconfont icon-houtai_yingxiao_pintuan" }),
                    "\u62FC\u56E2"
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/new", className: active == 'new' ? 'active' : '' },
                    _react2.default.createElement("i", { className: "iconfont icon-eyek" }),
                    "\u901B\u65B0\u54C1"
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/car", className: active == 'car' ? 'active' : '' },
                    _react2.default.createElement("i", { className: "iconfont icon-gouwuche1" }),
                    "\u8D2D\u7269\u8F66"
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/mine", className: active == 'mine' ? 'active' : '' },
                    _react2.default.createElement("i", { className: "iconfont icon-wode" }),
                    "\u6211\u7684"
                )
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = __webpack_require__(233);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	get: _get2.default
};

/***/ })

},[161]);