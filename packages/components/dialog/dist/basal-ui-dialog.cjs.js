'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./basal-ui-dialog.cjs.prod.js");
} else {
  module.exports = require("./basal-ui-dialog.cjs.dev.js");
}
