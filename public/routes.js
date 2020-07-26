"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  path: '/status',
  method: 'GET',
  handler: function handler(req, h) {
    return h.response({
      status: 200,
      message: 'OK'
    });
  }
}];
exports.default = _default;