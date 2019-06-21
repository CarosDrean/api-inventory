"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function connect() {
  _mongoose["default"].connect(_config.MONGO_URI, {
    useNewUrlParser: true
  }).then(function () {
    return console.log('DB is conected!');
  })["catch"](function () {
    return console.log('Error al conectarse a base de datos!');
  });
}
//# sourceMappingURL=database.js.map