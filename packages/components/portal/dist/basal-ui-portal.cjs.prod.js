'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var ReactDOM__default = /*#__PURE__*/_interopDefault(ReactDOM);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Portal = /*#__PURE__*/React__default["default"].forwardRef(function Portal(props, forwardedRef) {
  var _globalThis$document;

  var rootContainer = globalThis == null ? void 0 : (_globalThis$document = globalThis.document) == null ? void 0 : _globalThis$document.body;
  /**
   * Skip rendering when there is no portal during the SSR
   */

  if (!rootContainer) return null;
  return /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
    "data-x-portal": "",
    ref: forwardedRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1
    }
  })), rootContainer);
});

exports["default"] = Portal;
