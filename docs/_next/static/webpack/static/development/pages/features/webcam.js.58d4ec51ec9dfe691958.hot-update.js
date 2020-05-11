webpackHotUpdate("static/development/pages/features/webcam.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./meta */ "./components/meta.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shader */ "./components/shader.js");









var _jsxFileName = "/Users/amagi/src/github.com/fand/veda.gl/components/layout.js";











var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "layout__Wrapper",
  componentId: "sc-1r8im8e-0"
})(["position:fixed;top:0;left:0;height:100%;width:100%;overflow:visible;display:flex;transition:left 0.3s;@media (max-width:", "px){width:auto;left:-82vw;&.menu{left:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_15__["default"].mobile);
var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "layout__SidebarWrapper",
  componentId: "sc-1r8im8e-1"
})(["width:270px;-webkit-overflow-scrolling:touch;@media (max-width:", "px){width:82vw;}"], _constants__WEBPACK_IMPORTED_MODULE_15__["default"].mobile);
var BodyColumn = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "layout__BodyColumn",
  componentId: "sc-1r8im8e-2"
})(["flex:1;position:relative;@media (max-width:", "px){width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_15__["default"].mobile);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].main.withConfig({
  displayName: "layout__MainWrapper",
  componentId: "sc-1r8im8e-3"
})(["position:absolute;top:0;left:0;height:100%;width:100%;overflow:auto;-webkit-overflow-scrolling:touch;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "layout__HeaderWrapper",
  componentId: "sc-1r8im8e-4"
})(["position:absolute;top:0;width:100%;z-index:2;"]);

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "watchScroll", Object(lodash__WEBPACK_IMPORTED_MODULE_13__["throttle"])(function () {
      _this.props.dispatch(_this.body.scrollTop > 100 ? Object(_actions__WEBPACK_IMPORTED_MODULE_12__["showHeader"])() : Object(_actions__WEBPACK_IMPORTED_MODULE_12__["hideHeader"])());
    }, 100));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setBody", function (el) {
      _this.body = el;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (false) {}

      this.body.addEventListener("scroll", this.watchScroll);
      this.watchScroll();
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["hideMenu"])());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.body.removeEventListener("scroll", this.watchScroll);
    }
  }, {
    key: "url",
    value: function url() {
      return "https://veda.gl".concat(this.props.path);
    }
  }, {
    key: "siteName",
    value: function siteName() {
      return _constants__WEBPACK_IMPORTED_MODULE_15__["default"].og.title;
    }
  }, {
    key: "title",
    value: function title() {
      var article = this.props.article[this.props.lang] || this.props.article.en;
      return (article.title ? article.title + " | " : "") + _constants__WEBPACK_IMPORTED_MODULE_15__["default"].og.title;
    }
  }, {
    key: "description",
    value: function description() {
      return this.props.article.description || _constants__WEBPACK_IMPORTED_MODULE_15__["default"].og.description;
    }
  }, {
    key: "image",
    value: function image() {
      return this.props.article.image || _constants__WEBPACK_IMPORTED_MODULE_15__["default"].og.image;
    }
  }, {
    key: "render",
    value: function render() {
      var sc = this.props.isMenuVisible ? "menu" : "";
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_18__["default"], {
        url: this.url(),
        title: this.title(),
        image: this.image(),
        description: this.description(),
        siteName: _constants__WEBPACK_IMPORTED_MODULE_15__["default"].og.title,
        lang: this.props.lang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Wrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SidebarWrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        path: this.props.path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(BodyColumn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(HeaderWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        path: this.props.path,
        i18n: !!this.props.article.ja,
        url: this.url(),
        title: this.title(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(MainWrapper, {
        ref: this.setBody,
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, this.props.children))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_shader__WEBPACK_IMPORTED_MODULE_19__["default"], {
        shader: this.props.shader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Layout, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var pathname;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

Layout.propTypes = {
  lang: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  path: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  article: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  shader: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    attach: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
    detach: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
  })]),
  isMenuVisible: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.boolean,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.function
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (s) {
  return s;
})(Layout));

/***/ })

})
//# sourceMappingURL=webcam.js.58d4ec51ec9dfe691958.hot-update.js.map