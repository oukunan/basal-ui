import React, { useContext, createContext, useRef, useImperativeHandle, useEffect, useCallback, useMemo } from 'react';
import Portal from '@basal-ui/portal';
import keyboardKey from '@basal-ui/keyboard-keycode';

var DialogContext = /*#__PURE__*/createContext(null);
function useDialogContext() {
  var context = useContext(DialogContext);

  if (!context) {
    throw new Error('Dialog components are compound component. Must be used inside Dialog.');
  }

  return context;
}

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

// Reference: https://github.com/whatwg/html/issues/2071#issuecomment-263736022
function getFocusableChildElement(rootElement) {
  var nodes = [];
  var treeWalker = document.createTreeWalker(rootElement, NodeFilter.SHOW_ELEMENT, {
    acceptNode: function acceptNode(node) {
      if (node.hidden || node.disabled || node.tabIndex < 0) {
        return NodeFilter.FILTER_SKIP;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (treeWalker.nextNode()) {
    nodes.push(treeWalker.currentNode);
  }

  return nodes;
}

function getFirstLastFocusableElement(rootElement) {
  var nodes = getFocusableChildElement(rootElement);

  if (nodes.length === 0) {
    return [];
  }

  return [nodes[0], nodes[nodes.length - 1]];
}

var DialogContent = /*#__PURE__*/React.forwardRef(function DialogContent(props, forwardedRef) {
  var context = useDialogContext();
  var contentRef = useRef(null);
  useImperativeHandle(forwardedRef, function () {
    return contentRef.current;
  }, []); // Initial focus in the first element node

  useEffect(function () {
    if (!contentRef.current) {
      return;
    }

    var elements = getFirstLastFocusableElement(contentRef.current);

    if (elements.length === 0) {
      return;
    }

    elements[0].focus();
  }, []);
  var handleClickOutside = useCallback(function (e) {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      context.onClose();
    }
  }, [context]); // TODO: Find the better solution that avoid attach the event to the DOM 🥲

  useEffect(function () {
    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]); // Trap the focus inside the dialog content and close dialog when ESCAPE key pressed

  var handleKeydown = useCallback(function (e) {
    if (e.key === keyboardKey.ESCAPE) {
      context.onClose();
      return;
    }

    if (!contentRef.current) {
      return;
    }

    var currentFocusElement = document.activeElement;

    var _getFirstLastFocusabl = getFirstLastFocusableElement(contentRef.current),
        firstElement = _getFirstLastFocusabl[0],
        lastElement = _getFirstLastFocusabl[1];

    if (e.key === keyboardKey.TAB) {
      if (e.shiftKey) {
        if (currentFocusElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (currentFocusElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [context]);

  if (!context.open) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    "data-x-dialog-content": "",
    role: "dialog",
    "aria-modal": "true",
    ref: contentRef,
    onKeyDown: handleKeydown
  })));
});

var DialogOverlay = /*#__PURE__*/React.forwardRef(function DialogOverlay(props, forwardedRef) {
  var context = useDialogContext();

  if (!context.open) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", _extends({
    ref: forwardedRef,
    "data-x-dialog-overlay": ""
  }, props)));
});

function Dialog(props) {
  var context = useMemo(function () {
    return {
      open: props.open,
      onClose: props.onClose
    };
  }, [props.onClose, props.open]);
  return /*#__PURE__*/React.createElement(DialogContext.Provider, {
    value: context
  }, props.children);
}

Dialog.Overlay = DialogOverlay;
Dialog.Content = DialogContent;

export { Dialog as default };
