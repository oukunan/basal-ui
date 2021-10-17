'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./basal-ui-portal.cjs.prod.js");
} else {
  module.exports = require("./basal-ui-portal.cjs.dev.js");
}
