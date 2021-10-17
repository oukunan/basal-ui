import React, { useContext, createContext, useMemo, useCallback, useRef, useState } from 'react';
import { useGenerateId, IdProvider } from '@basal-ui/id';
import keyboardKey from '@basal-ui/keyboard-keycode';

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

var AccordionContext = /*#__PURE__*/createContext(null);
function useAccordionContext() {
  var context = useContext(AccordionContext);

  if (!context) {
    throw new Error('Accordion components are compound component. Must be used inside Accordion.');
  }

  return context;
}

var AccordionItemContext = /*#__PURE__*/createContext(null);
function AccordionItemProvider(props) {
  var accordionContext = useAccordionContext();
  var id = useGenerateId();
  var context = useMemo(function () {
    var _accordionContext$val;

    return {
      itemId: props.itemId,
      headerId: "header-" + id,
      contentId: "content-" + id,
      isExpanded: !!((_accordionContext$val = accordionContext.value) != null && _accordionContext$val.includes(props.itemId)),
      onToggle: function onToggle() {
        return accordionContext.onToggle && accordionContext.onToggle(props.itemId);
      }
    };
  }, [accordionContext, id, props.itemId]);
  return /*#__PURE__*/React.createElement(AccordionItemContext.Provider, {
    value: context
  }, props.children);
}
function useAccordionItemContext() {
  var context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error('Must be used inside AccordionItemContext Provider.');
  }

  return context;
}

/**
 * @internal only
 */
function getRootAccordionNode(elem) {
  var _elem$parentElement;

  return (_elem$parentElement = elem.parentElement) == null ? void 0 : _elem$parentElement.parentElement;
}
/**
 * @internal only
 */


function getAllHeaderSiblings(elem) {
  var _elem$parentElement2;

  var root = (_elem$parentElement2 = elem.parentElement) == null ? void 0 : _elem$parentElement2.parentElement;
  return root ? Array.from(root.querySelectorAll('[data-accordion-component="AccordionHeader"]')) : [];
}

function focusLastSibling(elem) {
  var siblings = getAllHeaderSiblings(elem);
  var lastSibling = siblings[siblings.length - 1].firstChild;
  lastSibling.focus();
}
function focusFirstSibling(elem) {
  var _getRootAccordionNode, _getRootAccordionNode2;

  var firstChild = (_getRootAccordionNode = getRootAccordionNode(elem)) == null ? void 0 : (_getRootAccordionNode2 = _getRootAccordionNode.firstChild) == null ? void 0 : _getRootAccordionNode2.firstChild;
  firstChild.focus();
}
function focusNextSibling(elem) {
  var siblings = getAllHeaderSiblings(elem);
  var currentElemIndex = siblings.indexOf(elem.parentElement);

  if (currentElemIndex === siblings.length - 1) {
    focusFirstSibling(elem);
    return;
  }

  var nextSibling = siblings[currentElemIndex + 1].firstChild;
  nextSibling.focus();
}
function focusPreviousSibling(elem) {
  var siblings = getAllHeaderSiblings(elem);
  var currentElemIndex = siblings.indexOf(elem.parentElement);

  if (currentElemIndex === 0) {
    focusLastSibling(elem);
    return;
  }

  var previousSibling = siblings[currentElemIndex - 1].firstChild;
  previousSibling.focus();
}

var AccordionHeader = /*#__PURE__*/React.forwardRef(function AccordionHeader(props, forwardedRef) {
  var _useAccordionItemCont = useAccordionItemContext(),
      onToggle = _useAccordionItemCont.onToggle,
      contentId = _useAccordionItemCont.contentId,
      headerId = _useAccordionItemCont.headerId,
      isExpanded = _useAccordionItemCont.isExpanded;

  var navigateFocus = useCallback(function (e) {
    var elem = e.target;

    switch (e.key) {
      case keyboardKey.SPACE:
      case keyboardKey.ENTER:
        e.preventDefault();
        onToggle && onToggle();
        break;

      case keyboardKey.DOWN:
        e.preventDefault();
        focusNextSibling(elem);
        break;

      case keyboardKey.UP:
        e.preventDefault();
        focusPreviousSibling(elem);
        break;

      case keyboardKey.HOME:
        e.preventDefault();
        focusFirstSibling(elem);
        break;

      case keyboardKey.END:
        focusLastSibling(elem);
        break;
    }
  }, [onToggle]);
  return /*#__PURE__*/React.createElement("h3", {
    ref: forwardedRef,
    className: props.headerClassName,
    "data-accordion-component": "AccordionHeader"
  }, /*#__PURE__*/React.createElement("button", {
    className: props.buttonClassName,
    id: headerId,
    "aria-controls": contentId,
    "aria-expanded": isExpanded,
    "aria-disabled": isExpanded,
    onClick: onToggle,
    onKeyDown: navigateFocus
  }, props.children));
});

function AccordionItem(props) {
  return /*#__PURE__*/React.createElement(AccordionItemProvider, {
    itemId: props.value
  }, props.children);
}

var AccordionContent = /*#__PURE__*/React.forwardRef(function AccordionContent(props, forwardedRef) {
  var _useAccordionItemCont = useAccordionItemContext(),
      contentId = _useAccordionItemCont.contentId,
      headerId = _useAccordionItemCont.headerId,
      isExpanded = _useAccordionItemCont.isExpanded;

  return /*#__PURE__*/React.createElement("div", {
    id: contentId,
    ref: forwardedRef,
    className: props.className,
    role: "region",
    "aria-labelledby": headerId,
    hidden: !isExpanded
  }, props.children);
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function useSingleAccordionState(props) {
  var isControlled = useRef(!!props.value);

  var _useState = useState(function () {
    if (!isControlled.current) {
      return props.preExpand || '';
    }

    return '';
  }),
      uncontrolledValue = _useState[0],
      setUncontrolledValue = _useState[1];

  var value = isControlled.current ? props.value : uncontrolledValue;
  var updateAccordionValue = isControlled.current ? props.onToggle : setUncontrolledValue;
  var onToggle = useCallback(function (newValue) {
    if (!updateAccordionValue) {
      return;
    }

    if (value === newValue && props.allowZeroCollapse) {
      updateAccordionValue('');
      return;
    }

    if (!value || value && value.trim().length > 0) {
      updateAccordionValue(newValue);
    }
  }, [props.allowZeroCollapse, updateAccordionValue, value]);
  return useMemo(function () {
    return {
      value: value,
      onToggle: onToggle
    };
  }, [onToggle, value]);
}

var _excluded$1 = ["allowZeroCollapse", "value", "preExpand", "onToggle"];
var AccordionSingle = /*#__PURE__*/React.forwardRef(function AccordionSingle(props, forwardRef) {
  var allowZeroCollapse = props.allowZeroCollapse,
      value = props.value,
      preExpand = props.preExpand,
      onToggle = props.onToggle,
      restProps = _objectWithoutPropertiesLoose(props, _excluded$1);

  var state = useSingleAccordionState({
    value: value,
    allowZeroCollapse: allowZeroCollapse,
    preExpand: preExpand,
    onToggle: onToggle
  });
  var context = useMemo(function () {
    return {
      value: state.value ? [state.value] : [],
      onToggle: state.onToggle
    };
  }, [state.onToggle, state.value]);
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: forwardRef
  }, restProps)));
});

// TODO: Shall we merge this with `useSingleAccordionState?`
function useMultipleAccordionState(props) {
  var isControlled = useRef(!!props.value);

  var _useState = useState(function () {
    if (!isControlled.current) {
      return props.preExpand || [];
    }

    return [];
  }),
      uncontrolledValue = _useState[0],
      setUncontrolledValue = _useState[1];

  var value = isControlled.current ? props.value : uncontrolledValue;
  var updateAccordionValue = isControlled.current ? props.onToggle : setUncontrolledValue;
  var onToggle = useCallback(function (newValue) {
    if (!updateAccordionValue) {
      return;
    } // TODO: Refactor this condition


    if (value) {
      if (value.includes(newValue)) {
        if (value.length > 1) {
          updateAccordionValue(value.filter(function (val) {
            return val !== newValue;
          }));
        }

        if (value.length === 1) {
          props.allowZeroCollapse && updateAccordionValue([]);
        }
      } else {
        updateAccordionValue(Array.from(new Set([].concat(value, [newValue]))));
      }
    }
  }, [props.allowZeroCollapse, updateAccordionValue, value]);
  return useMemo(function () {
    return {
      value: value,
      onToggle: onToggle
    };
  }, [onToggle, value]);
}

var _excluded = ["allowZeroCollapse", "value", "preExpand", "onToggle"];
var AccordionMultiple = /*#__PURE__*/React.forwardRef(function AccordionMultiple(props, forwardedRef) {
  var allowZeroCollapse = props.allowZeroCollapse,
      value = props.value,
      preExpand = props.preExpand,
      onToggle = props.onToggle,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var state = useMultipleAccordionState({
    value: value,
    preExpand: preExpand,
    allowZeroCollapse: allowZeroCollapse,
    onToggle: onToggle
  });
  var context = useMemo(function () {
    return {
      value: state.value,
      onToggle: state.onToggle
    };
  }, [state.onToggle, state.value]);
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: forwardedRef
  }, restProps)));
});

var Accordion = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var renderAccordion = useCallback(function () {
    if (props.type === 'single') {
      return /*#__PURE__*/React.createElement(AccordionSingle, _extends({}, props, {
        ref: forwardedRef
      }));
    }

    if (props.type === 'multiple') {
      return /*#__PURE__*/React.createElement(AccordionMultiple, _extends({}, props, {
        ref: forwardedRef
      }));
    }

    throw new Error("Invalid Accordion `type` props. It's should be either `single` or `multiple`");
  }, [props, forwardedRef]);
  return /*#__PURE__*/React.createElement(IdProvider, null, renderAccordion());
});
Accordion.displayName = 'Accordion';
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export { Accordion, AccordionContent, AccordionHeader, AccordionItem };
