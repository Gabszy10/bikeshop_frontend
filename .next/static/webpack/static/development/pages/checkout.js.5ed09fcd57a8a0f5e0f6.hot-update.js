webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/checkout/userForm.js":
/*!*****************************************!*\
  !*** ./components/checkout/userForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function useForm(stateSchema) {
  _s();

  var validationSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var handleStateChange = arguments.length > 3 ? arguments[3] : undefined;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(stateSchema),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      disable = _useState2[0],
      setDisable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isDirty = _useState3[0],
      setIsDirty = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_3__["decryptInfoData"])();

    if (decryptedData) {
      // if (
      //   !decryptedData.delivery_date.value ||
      //   !decryptedData.delivery_time.value
      // ) {
      //   alert("Please input delivery date and time");
      //   window.location.href = "/cart";
      // } else {
      //   setState(decryptedData);
      // }
      setState(decryptedData);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setDisable(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isDirty) {
      setDisable(validateState());
    }
  }, [state, isDirty]); // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid instensive memory leaked
  // in every re-render in component

  var validateState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var hasErrorInState = Object.keys(validationSchema).some(function (key) {
      var isInputFieldRequired = validationSchema[key].required; // Get state value

      var stateValue = state[key].value;
      var stateError = state[key].error;
      return isInputFieldRequired && !stateValue || stateError;
    });
    return hasErrorInState;
  }, [state, validationSchema]);

  function handleOnChange(event) {
    setIsDirty(true);
    var name = event.target.name;
    var value = event.target.value;
    var error = "";

    if (validationSchema[name].required) {
      if (!value) {
        error = "This is required field.";
      }
    }

    if (validationSchema[name].validator !== null && typeof validationSchema[name].validator === "object") {
      if (validationSchema[name].validator.regEx) {
        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error;
        }
      }
    }

    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, {
        value: value,
        error: error
      }));
    }); // handleStateChange(event);
  }

  function handleOnSubmit(event) {
    event.preventDefault(); // Making sure that validateState returns false
    // Before calling the submit callback function

    if (!validateState()) {// callback();
    }
  }

  return {
    state: state,
    disable: disable,
    handleOnChange: handleOnChange,
    handleOnSubmit: handleOnSubmit,
    setState: setState
  };
}

_s(useForm, "QFW4JOgtnR63OvX6n3PsqET5dk8=");

/* harmony default export */ __webpack_exports__["default"] = (useForm);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L3VzZXJGb3JtLmpzIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJzdGF0ZVNjaGVtYSIsInZhbGlkYXRpb25TY2hlbWEiLCJjYWxsYmFjayIsImhhbmRsZVN0YXRlQ2hhbmdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGlzYWJsZSIsInNldERpc2FibGUiLCJpc0RpcnR5Iiwic2V0SXNEaXJ0eSIsInVzZUVmZmVjdCIsImRlY3J5cHRlZERhdGEiLCJkZWNyeXB0SW5mb0RhdGEiLCJ2YWxpZGF0ZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJoYXNFcnJvckluU3RhdGUiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImlzSW5wdXRGaWVsZFJlcXVpcmVkIiwicmVxdWlyZWQiLCJzdGF0ZVZhbHVlIiwidmFsdWUiLCJzdGF0ZUVycm9yIiwiZXJyb3IiLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbGlkYXRvciIsInJlZ0V4IiwidGVzdCIsInByZXZTdGF0ZSIsImhhbmRsZU9uU3VibWl0IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBS0EsU0FBU0EsT0FBVCxDQUNFQyxXQURGLEVBS0U7QUFBQTs7QUFBQSxNQUhBQyxnQkFHQSx1RUFIbUIsRUFHbkI7QUFBQSxNQUZBQyxRQUVBO0FBQUEsTUFEQUMsaUJBQ0E7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDSixXQUFELENBRGxDO0FBQUEsTUFDT0ssS0FEUDtBQUFBLE1BQ2NDLFFBRGQ7O0FBQUEsbUJBRThCRixzREFBUSxDQUFDLElBQUQsQ0FGdEM7QUFBQSxNQUVPRyxPQUZQO0FBQUEsTUFFZ0JDLFVBRmhCOztBQUFBLG1CQUc4Qkosc0RBQVEsQ0FBQyxLQUFELENBSHRDO0FBQUEsTUFHT0ssT0FIUDtBQUFBLE1BR2dC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OztBQUNBLFFBQUksQ0FBQ3RCLGFBQWEsRUFBbEIsRUFBc0IsQ0FDcEI7QUFDRDtBQUNGOztBQUVELFNBQU87QUFBRVQsU0FBSyxFQUFMQSxLQUFGO0FBQVNFLFdBQU8sRUFBUEEsT0FBVDtBQUFrQm9CLGtCQUFjLEVBQWRBLGNBQWxCO0FBQWtDUSxrQkFBYyxFQUFkQSxjQUFsQztBQUFrRDdCLFlBQVEsRUFBUkE7QUFBbEQsR0FBUDtBQUNEOztHQWhHUVAsTzs7QUFrR01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGVja291dC5qcy41ZWQwOWZjZDU3YThhMGY1ZTBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBkZWNyeXB0SW5mb0RhdGEsXHJcbiAgZW5jcnlwdEluZm9EYXRhLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VGb3JtKFxyXG4gIHN0YXRlU2NoZW1hLFxyXG4gIHZhbGlkYXRpb25TY2hlbWEgPSB7fSxcclxuICBjYWxsYmFjayxcclxuICBoYW5kbGVTdGF0ZUNoYW5nZVxyXG4pIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHN0YXRlU2NoZW1hKTtcclxuICBjb25zdCBbZGlzYWJsZSwgc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNEaXJ0eSwgc2V0SXNEaXJ0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZGVjcnlwdGVkRGF0YSA9IGRlY3J5cHRJbmZvRGF0YSgpO1xyXG4gICAgaWYgKGRlY3J5cHRlZERhdGEpIHtcclxuICAgICAgLy8gaWYgKFxyXG4gICAgICAvLyAgICFkZWNyeXB0ZWREYXRhLmRlbGl2ZXJ5X2RhdGUudmFsdWUgfHxcclxuICAgICAgLy8gICAhZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV90aW1lLnZhbHVlXHJcbiAgICAgIC8vICkge1xyXG4gICAgICAvLyAgIGFsZXJ0KFwiUGxlYXNlIGlucHV0IGRlbGl2ZXJ5IGRhdGUgYW5kIHRpbWVcIik7XHJcbiAgICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCI7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgc2V0U3RhdGUoZGVjcnlwdGVkRGF0YSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgc2V0U3RhdGUoZGVjcnlwdGVkRGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGlzYWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNEaXJ0eSkge1xyXG4gICAgICBzZXREaXNhYmxlKHZhbGlkYXRlU3RhdGUoKSk7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlLCBpc0RpcnR5XSk7XHJcblxyXG4gIC8vIFVzZWQgdG8gZGlzYWJsZSBzdWJtaXQgYnV0dG9uIGlmIHRoZXJlJ3MgYW4gZXJyb3IgaW4gc3RhdGVcclxuICAvLyBvciB0aGUgcmVxdWlyZWQgZmllbGQgaW4gc3RhdGUgaGFzIG5vIHZhbHVlLlxyXG4gIC8vIFdyYXBwZWQgaW4gdXNlQ2FsbGJhY2sgdG8gY2FjaGVkIHRoZSBmdW5jdGlvbiB0byBhdm9pZCBpbnN0ZW5zaXZlIG1lbW9yeSBsZWFrZWRcclxuICAvLyBpbiBldmVyeSByZS1yZW5kZXIgaW4gY29tcG9uZW50XHJcbiAgY29uc3QgdmFsaWRhdGVTdGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGhhc0Vycm9ySW5TdGF0ZSA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb25TY2hlbWEpLnNvbWUoKGtleSkgPT4ge1xyXG4gICAgICBjb25zdCBpc0lucHV0RmllbGRSZXF1aXJlZCA9IHZhbGlkYXRpb25TY2hlbWFba2V5XS5yZXF1aXJlZDtcclxuICAgICAgLy8gR2V0IHN0YXRlIHZhbHVlXHJcbiAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBzdGF0ZVtrZXldLnZhbHVlO1xyXG4gICAgICBjb25zdCBzdGF0ZUVycm9yID0gc3RhdGVba2V5XS5lcnJvcjtcclxuXHJcbiAgICAgIHJldHVybiAoaXNJbnB1dEZpZWxkUmVxdWlyZWQgJiYgIXN0YXRlVmFsdWUpIHx8IHN0YXRlRXJyb3I7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaGFzRXJyb3JJblN0YXRlO1xyXG4gIH0sIFtzdGF0ZSwgdmFsaWRhdGlvblNjaGVtYV0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVPbkNoYW5nZShldmVudCkge1xyXG4gICAgc2V0SXNEaXJ0eSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG4gICAgaWYgKHZhbGlkYXRpb25TY2hlbWFbbmFtZV0ucmVxdWlyZWQpIHtcclxuICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIGVycm9yID0gXCJUaGlzIGlzIHJlcXVpcmVkIGZpZWxkLlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hW25hbWVdLnZhbGlkYXRvciAhPT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgdmFsaWRhdGlvblNjaGVtYVtuYW1lXS52YWxpZGF0b3IgPT09IFwib2JqZWN0XCJcclxuICAgICkge1xyXG4gICAgICBpZiAodmFsaWRhdGlvblNjaGVtYVtuYW1lXS52YWxpZGF0b3IucmVnRXgpIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgIXZhbGlkYXRpb25TY2hlbWFbbmFtZV0udmFsaWRhdG9yLnJlZ0V4LnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICBlcnJvciA9IHZhbGlkYXRpb25TY2hlbWFbbmFtZV0udmFsaWRhdG9yLmVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgW25hbWVdOiB7IHZhbHVlLCBlcnJvciB9LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vIGhhbmRsZVN0YXRlQ2hhbmdlKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIE1ha2luZyBzdXJlIHRoYXQgdmFsaWRhdGVTdGF0ZSByZXR1cm5zIGZhbHNlXHJcbiAgICAvLyBCZWZvcmUgY2FsbGluZyB0aGUgc3VibWl0IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBpZiAoIXZhbGlkYXRlU3RhdGUoKSkge1xyXG4gICAgICAvLyBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3RhdGUsIGRpc2FibGUsIGhhbmRsZU9uQ2hhbmdlLCBoYW5kbGVPblN1Ym1pdCwgc2V0U3RhdGUgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==