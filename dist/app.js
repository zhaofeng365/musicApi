"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qq = exports.netease = exports.default = void 0;
var _musicApi = _interopRequireDefault(require("./music-api"));
var _flyio = _interopRequireDefault(require("./util/flyio.node"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _musicApi.default)(_flyio.default);
const qq = app.qq;
exports.qq = qq;
const netease = app.netease;
exports.netease = netease;
var _default = app;
exports.default = _default;