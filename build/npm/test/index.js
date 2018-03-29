"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _path = require("path");

var _amen = require("amen");

var _src = require("../src");

var _src2 = _interopRequireDefault(_src);

var _pandaVdom = require("panda-vdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("biscotti-html", _asyncToGenerator(function* () {
    var documents, render, result;
    render = (0, _src2.default)();
    documents = yield render({
      path: (0, _path.resolve)("./test/files/index.vhtml")
    });
    _assert2.default.equal(documents.length, 1);
    result = _pandaVdom.HTML.render(documents[0]);
    return _assert2.default.equal(result, "<html><body><h1>Hello, World!</h1></body></html>");
  }))));
})();