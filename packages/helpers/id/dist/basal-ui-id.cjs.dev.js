'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

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

var IdContext = /*#__PURE__*/react.createContext({
  current: 0
});
function IdProvider(props) {
  var context = react.useMemo(function () {
    return {
      current: 0
    };
  }, []);
  return /*#__PURE__*/React.createElement(IdContext.Provider, _extends({
    value: context
  }, props));
}
function useGenerateId() {
  var context = react.useContext(IdContext);
  return react.useMemo(function () {
    return "id-" + ++context.current;
  }, []);
}

exports.IdProvider = IdProvider;
exports.useGenerateId = useGenerateId;
