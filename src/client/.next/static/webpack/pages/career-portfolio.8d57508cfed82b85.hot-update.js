"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/career-portfolio",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _layout_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-components/header */ \"./components/layout-components/header.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: 'flex';\\n    flexDirection: 'column';\\n    height: '100%';\\n    width: '100%';\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: 'flex';\\n    flex: 1;\\n    flexDirection: 'column';\\n    padding-top: 20px;\\n    height: 100%;\\n    width: 80%;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin-top: 50px;\\n    margin-left: 15%;\\n    margin-right: 30%;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar LayoutStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = LayoutStyle;\nvar ContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = ContentStyle;\nvar StyledBodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StyledBodyContainer;\nvar StyledBodyContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = StyledBodyContentContainer;\nvar RedboxRx = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutStyle, {\n        __source: {\n            fileName: \"D:\\\\Developer\\\\Github\\\\career-portfolio\\\\src\\\\client\\\\components\\\\layout.js\",\n            lineNumber: 31\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Developer\\\\Github\\\\career-portfolio\\\\src\\\\client\\\\components\\\\layout.js\",\n                    lineNumber: 32\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentStyle, {\n                __source: {\n                    fileName: \"D:\\\\Developer\\\\Github\\\\career-portfolio\\\\src\\\\client\\\\components\\\\layout.js\",\n                    lineNumber: 33\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBodyContainer, {\n                    __source: {\n                        fileName: \"D:\\\\Developer\\\\Github\\\\career-portfolio\\\\src\\\\client\\\\components\\\\layout.js\",\n                        lineNumber: 34\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBodyContentContainer, {\n                        __source: {\n                            fileName: \"D:\\\\Developer\\\\Github\\\\career-portfolio\\\\src\\\\client\\\\components\\\\layout.js\",\n                            lineNumber: 35\n                        },\n                        __self: _this,\n                        children: props.children\n                    })\n                })\n            })\n        ]\n    });\n};\n_c4 = RedboxRx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RedboxRx);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"LayoutStyle\");\n$RefreshReg$(_c1, \"ContentStyle\");\n$RefreshReg$(_c2, \"StyledBodyContainer\");\n$RefreshReg$(_c3, \"StyledBodyContentContainer\");\n$RefreshReg$(_c4, \"RedboxRx\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUVTOzs7Ozs7Ozs7Ozs7OztRQUVoQixDQUsvQjs7Ozs7Ozs7O1FBQ2dDLENBT2hDOzs7Ozs7Ozs7UUFDdUMsQ0FHdkM7Ozs7Ozs7OztRQUM4QyxDQUk5Qzs7Ozs7OztBQXRCQSxHQUFLLENBQUNHLFdBQVcsR0FBR0YsNkRBQVU7S0FBeEJFLFdBQVc7QUFNakIsR0FBSyxDQUFDRSxZQUFZLEdBQUdKLDZEQUFVO01BQXpCSSxZQUFZO0FBUWxCLEdBQUssQ0FBQ0MsbUJBQW1CLEdBQUdMLDZEQUFVO01BQWhDSyxtQkFBbUI7QUFJekIsR0FBSyxDQUFDQywwQkFBMEIsR0FBR04sNkRBQVU7TUFBdkNNLDBCQUEwQjtBQU1oQyxHQUFLLENBQUNDLFFBQVEsR0FBR0MsUUFBUSxDQUFSQSxLQUFLO2tCQUNsQixNQUFNLHlEQUFMTixXQUFXOzs7Ozs7O2lGQUNQRCxpRUFBTTs7Ozs7OztpRkFDTkcsWUFBWTs7Ozs7OytGQUNSQyxtQkFBbUI7Ozs7OzttR0FDZkMsMEJBQTBCOzs7Ozs7a0NBQ3RCRSxLQUFLLENBQUNDLFFBQVE7Ozs7Ozs7TUFON0JGLFFBQVE7QUFZZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0LWNvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmNvbnN0IExheW91dFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ICdmbGV4JztcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nO1xyXG4gICAgaGVpZ2h0OiAnMTAwJSc7XHJcbiAgICB3aWR0aDogJzEwMCUnO1xyXG5gO1xyXG5jb25zdCBDb250ZW50U3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnO1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRCb2R5Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRCb2R5Q29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG5gO1xyXG5cclxuY29uc3QgUmVkYm94UnggPSBwcm9wcyA9PiAoXHJcbiAgICA8TGF5b3V0U3R5bGU+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxDb250ZW50U3R5bGU+XHJcbiAgICAgICAgICAgIDxTdHlsZWRCb2R5Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEJvZHlDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQm9keUNvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQm9keUNvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbnRlbnRTdHlsZT5cclxuICAgIDwvTGF5b3V0U3R5bGU+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFJlZGJveFJ4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkhlYWRlciIsIkxheW91dFN0eWxlIiwiZGl2IiwiQ29udGVudFN0eWxlIiwiU3R5bGVkQm9keUNvbnRhaW5lciIsIlN0eWxlZEJvZHlDb250ZW50Q29udGFpbmVyIiwiUmVkYm94UngiLCJwcm9wcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

});