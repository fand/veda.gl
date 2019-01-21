webpackHotUpdate("static/development/pages/commands.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meta */ "./components/meta.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shader */ "./components/shader.js");

var _jsxFileName = "/Users/amagi/src/github.com/fand/veda.gl/components/layout.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "layout__Wrapper",
  componentId: "s1r8im8e-0"
})(["position:fixed;top:0;left:0;height:100%;width:100%;overflow:visible;display:flex;transition:left 0.3s;@media (max-width:", "px){width:auto;left:-82vw;&.menu{left:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_6__["default"].mobile);
var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "layout__SidebarWrapper",
  componentId: "s1r8im8e-1"
})(["width:270px;-webkit-overflow-scrolling:touch;@media (max-width:", "px){width:82vw;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["default"].mobile);
var BodyColumn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "layout__BodyColumn",
  componentId: "s1r8im8e-2"
})(["flex:1;position:relative;@media (max-width:", "px){width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_6__["default"].mobile);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].main.withConfig({
  displayName: "layout__MainWrapper",
  componentId: "s1r8im8e-3"
})(["position:absolute;top:0;left:0;height:100%;width:100%;overflow:auto;-webkit-overflow-scrolling:touch;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "layout__HeaderWrapper",
  componentId: "s1r8im8e-4"
})(["position:absolute;top:0;width:100%;z-index:2;"]);

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "watchScroll", Object(lodash__WEBPACK_IMPORTED_MODULE_4__["throttle"])(function () {
      _this.props.dispatch(_this.body.scrollTop > 100 ? Object(_actions__WEBPACK_IMPORTED_MODULE_3__["showHeader"])() : Object(_actions__WEBPACK_IMPORTED_MODULE_3__["hideHeader"])());
    }, 100));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setBody", function (el) {
      _this.body = el;
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (false) {}

      this.body.addEventListener('scroll', this.watchScroll);
      this.watchScroll();
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["hideMenu"])());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.body.removeEventListener('scroll', this.watchScroll);
    }
  }, {
    key: "url",
    value: function url() {
      return "https://veda.gl".concat(this.props.path);
    }
  }, {
    key: "siteName",
    value: function siteName() {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["default"].og.title;
    }
  }, {
    key: "title",
    value: function title() {
      var article = this.props.article[this.props.lang] || this.props.article.en;
      return (article.title ? article.title + ' | ' : '') + _constants__WEBPACK_IMPORTED_MODULE_6__["default"].og.title;
    }
  }, {
    key: "description",
    value: function description() {
      return this.props.article.description || _constants__WEBPACK_IMPORTED_MODULE_6__["default"].og.description;
    }
  }, {
    key: "image",
    value: function image() {
      return this.props.article.image || _constants__WEBPACK_IMPORTED_MODULE_6__["default"].og.image;
    }
  }, {
    key: "render",
    value: function render() {
      var sc = this.props.isMenuVisible ? 'menu' : '';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        url: this.url(),
        title: this.title(),
        image: this.image(),
        description: this.description(),
        siteName: _constants__WEBPACK_IMPORTED_MODULE_6__["default"].og.title,
        lang: this.props.lang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarWrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: this.props.path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BodyColumn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: this.props.path,
        i18n: !!this.props.article.ja,
        url: this.url(),
        title: this.title(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainWrapper, {
        ref: this.setBody,
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.props.children))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        shader: this.props.shader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Layout, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var pathname;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = _ref.pathname;
            return _context.abrupt("return", {
              path: pathname
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (s) {
  return s;
})(Layout));

/***/ })

})
//# sourceMappingURL=commands.js.21c9d657d94f528386c7.hot-update.js.map