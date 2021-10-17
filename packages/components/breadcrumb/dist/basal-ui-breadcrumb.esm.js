import React from 'react';
import Link from 'next/link';

function BreadcrumbLink(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: props.className,
    "aria-current": props.lastLink && 'page'
  }, /*#__PURE__*/React.createElement(Link, {
    href: props.link.href
  }, props.link.label));
}

function BreadcrumbSeparator(props) {
  var _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      separatorGap = props.separatorGap;
  return /*#__PURE__*/React.createElement("li", {
    css: {
      margin: separatorGap && "0 " + separatorGap + "px"
    },
    "data-breadcrumb-component": "BreadcrumbSeparator",
    "aria-hidden": true
  }, separator);
}

var Breadcrumb = /*#__PURE__*/React.forwardRef(function Breadcrumb(props, forwardedRef) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    ref: forwardedRef,
    className: props.navClassName
  }, /*#__PURE__*/React.createElement("ol", {
    className: props.listClassName
  }, props.links.reduce(function (acc, link, index) {
    if (index < props.links.length - 1) {
      acc = acc.concat( /*#__PURE__*/React.createElement(BreadcrumbLink, {
        key: "item-" + index,
        className: props.linkClassName,
        link: link
      }), /*#__PURE__*/React.createElement(BreadcrumbSeparator, {
        key: "separator-" + index,
        separator: props.separator,
        separatorGap: props.separatorGap
      }));
    } else {
      acc = acc.concat( /*#__PURE__*/React.createElement(BreadcrumbLink, {
        className: props.linkClassName,
        key: "item-" + index,
        link: link,
        lastLink: true
      }));
    }

    return acc;
  }, [])));
});

export { Breadcrumb as default };
