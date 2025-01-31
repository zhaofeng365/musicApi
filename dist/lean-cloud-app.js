"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressApp = _interopRequireDefault(require("./express-app"));
var _leanengine = _interopRequireDefault(require("leanengine"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_leanengine.default.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
_expressApp.default.use(_leanengine.default.express());
var _default = _expressApp.default;
exports.default = _default;