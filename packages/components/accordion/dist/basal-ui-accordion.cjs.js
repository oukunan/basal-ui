'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./basal-ui-accordion.cjs.prod.js");
} else {
  module.exports = require("./basal-ui-accordion.cjs.dev.js");
}
