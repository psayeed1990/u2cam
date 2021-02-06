(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./src/components/formComponents/formFields/TextField.js":
/*!***************************************************************!*\
  !*** ./src/components/formComponents/formFields/TextField.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/psayeed1990/projects/node/real/wp-converter/client/src/components/formComponents/formFields/TextField.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar TextField = function TextField(_ref) {\n  _s();\n\n  var value = _ref.value,\n      label = _ref.label,\n      initFocus = _ref.initFocus,\n      placeholder = _ref.placeholder,\n      maxChar = _ref.maxChar,\n      minChar = _ref.minChar,\n      isRequired = _ref.isRequired,\n      fieldName = _ref.fieldName,\n      register = _ref.register,\n      setValue = _ref.setValue,\n      errors = _ref.errors,\n      setError = _ref.setError,\n      clearErrors = _ref.clearErrors,\n      getValues = _ref.getValues;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (value) {\n      setValue(fieldName, value);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"form-group\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      ref: register({\n        required: isRequired ? \"\".concat(fieldName, \" is required\") : false,\n        maxLength: {\n          value: maxChar,\n          message: \"Max \".concat(maxChar, \" character\")\n        },\n        minLength: {\n          value: minChar,\n          message: \"Min \".concat(minChar, \" character\")\n        }\n      }),\n      id: fieldName,\n      autoFocus: initFocus,\n      name: fieldName,\n      type: \"text\",\n      placeholder: placeholder,\n      autoComplete: \"new-password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: fieldName,\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"\".concat(errors[fieldName] ? \"error\" : \"\"),\n      children: errors[fieldName] && errors[fieldName].message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TextField, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = TextField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextField);\n\nvar _c;\n\n$RefreshReg$(_c, \"TextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybUNvbXBvbmVudHMvZm9ybUZpZWxkcy9UZXh0RmllbGQuanM/OWIxYyJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJ2YWx1ZSIsImxhYmVsIiwiaW5pdEZvY3VzIiwicGxhY2Vob2xkZXIiLCJtYXhDaGFyIiwibWluQ2hhciIsImlzUmVxdWlyZWQiLCJmaWVsZE5hbWUiLCJyZWdpc3RlciIsInNldFZhbHVlIiwiZXJyb3JzIiwic2V0RXJyb3IiLCJjbGVhckVycm9ycyIsImdldFZhbHVlcyIsInVzZUVmZmVjdCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwibWVzc2FnZSIsIm1pbkxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQWVaO0FBQUE7O0FBQUEsTUFkSkMsS0FjSSxRQWRKQSxLQWNJO0FBQUEsTUFiSkMsS0FhSSxRQWJKQSxLQWFJO0FBQUEsTUFaSkMsU0FZSSxRQVpKQSxTQVlJO0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0pDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlkLEtBQUosRUFBVztBQUNUUyxjQUFRLENBQUNGLFNBQUQsRUFBWVAsS0FBWixDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFUSxRQUFRLENBQUM7QUFDWk8sZ0JBQVEsRUFBRVQsVUFBVSxhQUFNQyxTQUFOLG9CQUFnQyxLQUR4QztBQUVaUyxpQkFBUyxFQUFFO0FBQ1RoQixlQUFLLEVBQUVJLE9BREU7QUFFVGEsaUJBQU8sZ0JBQVNiLE9BQVQ7QUFGRSxTQUZDO0FBTVpjLGlCQUFTLEVBQUU7QUFDVGxCLGVBQUssRUFBRUssT0FERTtBQUVUWSxpQkFBTyxnQkFBU1osT0FBVDtBQUZFO0FBTkMsT0FBRCxDQURmO0FBWUUsUUFBRSxFQUFFRSxTQVpOO0FBYUUsZUFBUyxFQUFFTCxTQWJiO0FBY0UsVUFBSSxFQUFFSyxTQWRSO0FBZUUsVUFBSSxFQUFDLE1BZlA7QUFnQkUsaUJBQVcsRUFBRUosV0FoQmY7QUFpQkUsa0JBQVksRUFBQztBQWpCZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFvQkU7QUFBTyxhQUFPLEVBQUVJLFNBQWhCO0FBQUEsZ0JBQTRCTjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGLGVBcUJFO0FBQU0sZUFBUyxZQUFLUyxNQUFNLENBQUNILFNBQUQsQ0FBTixHQUFvQixPQUFwQixHQUE4QixFQUFuQyxDQUFmO0FBQUEsZ0JBQ0dHLE1BQU0sQ0FBQ0gsU0FBRCxDQUFOLElBQXFCRyxNQUFNLENBQUNILFNBQUQsQ0FBTixDQUFrQlU7QUFEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQWpERDs7R0FBTWxCLFM7O0tBQUFBLFM7QUFtRFNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9ybUNvbXBvbmVudHMvZm9ybUZpZWxkcy9UZXh0RmllbGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGV4dEZpZWxkID0gKHtcbiAgdmFsdWUsXG4gIGxhYmVsLFxuICBpbml0Rm9jdXMsXG4gIHBsYWNlaG9sZGVyLFxuICBtYXhDaGFyLFxuICBtaW5DaGFyLFxuICBpc1JlcXVpcmVkLFxuICBmaWVsZE5hbWUsXG4gIHJlZ2lzdGVyLFxuICBzZXRWYWx1ZSxcbiAgZXJyb3JzLFxuICBzZXRFcnJvcixcbiAgY2xlYXJFcnJvcnMsXG4gIGdldFZhbHVlcyxcbn0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKGZpZWxkTmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgcmVxdWlyZWQ6IGlzUmVxdWlyZWQgPyBgJHtmaWVsZE5hbWV9IGlzIHJlcXVpcmVkYCA6IGZhbHNlLFxuICAgICAgICAgIG1heExlbmd0aDoge1xuICAgICAgICAgICAgdmFsdWU6IG1heENoYXIsXG4gICAgICAgICAgICBtZXNzYWdlOiBgTWF4ICR7bWF4Q2hhcn0gY2hhcmFjdGVyYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgdmFsdWU6IG1pbkNoYXIsXG4gICAgICAgICAgICBtZXNzYWdlOiBgTWluICR7bWluQ2hhcn0gY2hhcmFjdGVyYCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgaWQ9e2ZpZWxkTmFtZX1cbiAgICAgICAgYXV0b0ZvY3VzPXtpbml0Rm9jdXN9XG4gICAgICAgIG5hbWU9e2ZpZWxkTmFtZX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpZWxkTmFtZX0+e2xhYmVsfTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Vycm9yc1tmaWVsZE5hbWVdID8gXCJlcnJvclwiIDogXCJcIn1gfT5cbiAgICAgICAge2Vycm9yc1tmaWVsZE5hbWVdICYmIGVycm9yc1tmaWVsZE5hbWVdLm1lc3NhZ2V9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/formComponents/formFields/TextField.js\n");

/***/ })

}]);