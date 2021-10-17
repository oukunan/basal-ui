'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Link = require('next/link');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Link__default = /*#__PURE__*/_interopDefault(Link);

function BreadcrumbLink(props) {
  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: props.className,
    "aria-current": props.lastLink && 'page'
  }, /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
    href: props.link.href
  }, props.link.label));
}

function BreadcrumbSeparator(props) {
  var _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      separatorGap = props.separatorGap;
  return /*#__PURE__*/React__default["default"].createElement("li", {
    css: {
      margin: separatorGap && "0 " + separatorGap + "px"
    },
    "data-breadcrumb-component": "BreadcrumbSeparator",
    "aria-hidden": true
  }, separator);
}

var Breadcrumb = /*#__PURE__*/React__default["default"].forwardRef(function Breadcrumb(props, forwardedRef) {
  return /*#__PURE__*/React__default["default"].createElement("nav", {
    "aria-label": "Breadcrumb",
    ref: forwardedRef,
    className: props.navClassName
  }, /*#__PURE__*/React__default["default"].createElement("ol", {
    className: props.listClassName
  }, props.links.reduce(function (acc, link, index) {
    if (index < props.links.length - 1) {
      acc = acc.concat( /*#__PURE__*/React__default["default"].createElement(BreadcrumbLink, {
        key: "item-" + index,
        className: props.linkClassName,
        link: link
      }), /*#__PURE__*/React__default["default"].createElement(BreadcrumbSeparator, {
        key: "separator-" + index,
        separator: props.separator,
        separatorGap: props.separatorGap
      }));
    } else {
      acc = acc.concat( /*#__PURE__*/React__default["default"].createElement(BreadcrumbLink, {
        className: props.linkClassName,
        key: "item-" + index,
        link: link,
        lastLink: true
      }));
    }

    return acc;
  }, [])));
});

exports["default"] = Breadcrumb;
