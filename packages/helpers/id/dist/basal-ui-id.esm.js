import { useMemo, useContext, createContext } from 'react';

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

var IdContext = /*#__PURE__*/createContext({
  current: 0
});
function IdProvider(props) {
  var context = useMemo(function () {
    return {
      current: 0
    };
  }, []);
  return /*#__PURE__*/React.createElement(IdContext.Provider, _extends({
    value: context
  }, props));
}
function useGenerateId() {
  var context = useContext(IdContext);
  return useMemo(function () {
    return "id-" + ++context.current;
  }, []);
}

export { IdProvider, useGenerateId };
