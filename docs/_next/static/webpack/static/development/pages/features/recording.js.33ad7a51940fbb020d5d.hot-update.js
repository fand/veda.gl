webpackHotUpdate("static/development/pages/features/recording.js",{

/***/ "./pages/features/recording.js":
/*!*************************************!*\
  !*** ./pages/features/recording.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/article */ "./components/article.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse */ "./pages/parse.js");
var _jsxFileName = "/Users/amagi/src/github.com/fand/veda.gl/pages/features/recording.js";





/* babel-plugin-inline-import './recording.md' */
var en = "---\ntitle: Recording Screen\ndescription: How to record shaders on VEDA\n---\n# Recording\n\n<video src=\"/static/videos/recording_sample.mp4\" width=\"100%\" loop autoplay onclick=\"this.play()\"></video>\n\nYou can record screen into video files with following commands:\n\n* `Veda: Start Recording` (key: `ctrl-shift-,`)\n* `Veda: Stop Recording` (key: `ctrl-shift-.`)\n\nVEDA will capture all frames while recording, then convert them into a video file.\nAfter the conversion is finished, VEDA will open the directory in Finder or Explorer depending on your OS.\n\nRecorded files will be saved in MP4 or GIF formate.\nYou can choose the format in Settings page.\n\n![Settings page screenshot](/static/images/recording_format.png)\n";

/* babel-plugin-inline-import './recording.ja.md' */
var ja = "---\ntitle: \u30EC\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\ndescription: VEDA\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9332\u753B\u3059\u308B\u65B9\u6CD5\n---\n# \u30EC\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\n\n<video src=\"/static/videos/recording_sample.mp4\" width=\"100%\" loop autoplay onclick=\"this.play()\"></video>\n\nVEDA\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9332\u753B\u3067\u304D\u307E\u3059:\n\n* `Veda: Start Recording` (key: `ctrl-shift-,`)\n* `Veda: Stop Recording` (key: `ctrl-shift-.`)\n\n\u30EC\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D\u3001VEDA\u306F\u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u753B\u50CF\u3068\u3057\u3066\u4FDD\u5B58\u3057\u3001\u305D\u306E\u5F8C\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\n\u5909\u63DB\u304C\u7D42\u4E86\u3057\u305F\u3089\u3001\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u306E\u4FDD\u5B58\u5834\u6240\u3092\u30D5\u30A1\u30A4\u30F3\u30C0\u30FC\u307E\u305F\u306F\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u3067\u8868\u793A\u3057\u307E\u3059\u3002\n\n\u8A2D\u5B9A\u30DA\u30FC\u30B8\u3067\u306F\u3001\u52D5\u753B\u306E\u5F62\u5F0F\u3092MP4\u3042\u308B\u3044\u306FGIF\u304B\u3089\u9078\u629E\u3067\u304D\u307E\u3059\u3002\n\n![Settings page screenshot](/static/images/recording_format.png)\n";
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/features/recording",
    article: {
      en: Object(_parse__WEBPACK_IMPORTED_MODULE_3__["default"])(en),
      ja: Object(_parse__WEBPACK_IMPORTED_MODULE_3__["default"])(ja)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/features/recording")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=recording.js.33ad7a51940fbb020d5d.hot-update.js.map