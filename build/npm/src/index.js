"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _biscotti = require("biscotti");

var _pandaVdom = require("panda-vdom");

var _filter = require("./filter");

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processor;

exports.default = processor = function (global = {}) {
  var globals;
  globals = Object.assign({}, { require }, _pandaVdom.HTML, globals);
  return (0, _biscotti.engine)([{
    sandbox: (0, _biscotti.sandbox)(globals)
  }, (0, _biscotti.loader)({
    coffeescript: {
      index: true,
      extensions: [".vhtml"]
    }
  }), (0, _biscotti.fallback)(), (0, _biscotti.include)({
    isBuffered: false
  }), _biscotti.buffer, _filter2.default]);
};

exports.default = processor;