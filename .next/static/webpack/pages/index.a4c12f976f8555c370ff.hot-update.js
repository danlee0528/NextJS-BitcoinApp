webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/user/Desktop/nextJS-ServerSideProject/components/Prices.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD'\n    });\n\n    return _this;\n  }\n\n  Object(_Users_user_Desktop_nextJS_ServerSideProject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var list = '';\n\n      if (this.state.currency === 'USD') {\n        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.USD.description, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: this.props.bpi.USD.code\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.USD.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 20\n        }, this);\n      } else if (this.state.currency === 'GBP') {\n        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.GBP.description, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: this.props.bpi.GBP.code\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.GBP.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 20\n        }, this);\n      } else if (this.state.currency === \"EUR\") {\n        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.EUR.description, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: this.props.bpi.EUR.code\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.EUR.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 20\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"ul\", {\n          className: \"list-group\",\n          children: list\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"select\", {\n          onChange: function onChange(e) {\n            return _this2.setState({\n              currency: e.target.value\n            });\n          },\n          className: \"form-control\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"option\", {\n            value: \"USD\",\n            children: \"USD\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"option\", {\n            value: \"EUR\",\n            children: \"EUR\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"option\", {\n            value: \"GEP\",\n            children: \"GEP\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/YmUyZCJdLCJuYW1lcyI6WyJQcmljZXMiLCJjdXJyZW5jeSIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7a1VBQ007QUFDSkMsY0FBUSxFQUFFO0FBRE4sSzs7Ozs7Ozs2QkFJQTtBQUFBOztBQUNKLFVBQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLFVBQUksS0FBS0MsS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTVCLEVBQWtDO0FBQzlCQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUNlLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxXQURsQyxxQkFFRDtBQUFNLHFCQUFNLHFCQUFaO0FBQUEsc0JBQW1DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZDLGVBR0g7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFLSCxPQU5ELE1BTU0sSUFBSSxLQUFLTixLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBa0M7QUFDcENDLFlBQUksZ0JBQUc7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQ2UsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJILFdBRGxDLHFCQUVEO0FBQU0scUJBQU0scUJBQVo7QUFBQSxzQkFBbUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkMsZUFHSDtBQUFBLHNCQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUtILE9BTkssTUFNQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxVQUFKLEVBQWtDO0FBQ3BDQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUNlLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSixXQURsQyxxQkFFRDtBQUFNLHFCQUFNLHFCQUFaO0FBQUEsc0JBQW1DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSDtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZDLGVBR0g7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkY7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFLSDs7QUFFRCwwQkFDSTtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQ0tQO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFRLGtCQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDWixzQkFBUSxFQUFFVyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBcEIsYUFBZCxDQUFKO0FBQUEsV0FBbkI7QUFDQSxtQkFBUyxFQUFDLGNBRFY7QUFBQSxrQ0FFSTtBQUFRLGlCQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQVEsaUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBUSxpQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBY0g7Ozs7RUExQ2dCQyw0Q0FBSyxDQUFDQyxTOztBQTZDWmpCLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJ1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgbGlzdCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKXtcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJyl7XG4gICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gYEVVUmApe1xuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0VQXCI+R0VQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})