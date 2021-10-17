'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./basal-ui-keyboard-keycode.cjs.prod.js");
} else {
  module.exports = require("./basal-ui-keyboard-keycode.cjs.dev.js");
}
