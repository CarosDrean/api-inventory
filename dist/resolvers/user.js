"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _user2 = _interopRequireDefault(require("../models/user"));

var _movement = _interopRequireDefault(require("../models/movement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    user: function () {
      var _user = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var _id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _ref._id;
                _context.next = 3;
                return _user2["default"].findById(_id).exec();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function user(_x, _x2) {
        return _user.apply(this, arguments);
      }

      return user;
    }(),
    users: function () {
      var _users = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user2["default"].find();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function users() {
        return _users.apply(this, arguments);
      }

      return users;
    }()
  },
  Mutation: {
    loginUser: function () {
      var _loginUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_, _ref2) {
        var email, password;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                email = _ref2.email, password = _ref2.password;
                return _context3.abrupt("return", _auth["default"].login(email, password));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function loginUser(_x3, _x4) {
        return _loginUser.apply(this, arguments);
      }

      return loginUser;
    }(),
    createUser: function () {
      var _createUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_, _ref3) {
        var input, user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                input = _ref3.input;
                user = new _user2["default"](input);
                _context4.next = 4;
                return user.save();

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createUser(_x5, _x6) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }(),
    deleteUser: function () {
      var _deleteUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_, _ref4) {
        var _id;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref4._id;
                _context5.next = 3;
                return _user2["default"].findByIdAndDelete(_id);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteUser(_x7, _x8) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }(),
    updateUser: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(_, _ref5) {
        var _id, input;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _id = _ref5._id, input = _ref5.input;
                _context6.next = 3;
                return _user2["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateUser(_x9, _x10) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  },
  User: {
    movements: function () {
      var _movements = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(_ref6) {
        var _id;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _id = _ref6._id;
                _context7.next = 3;
                return _movement["default"].find({
                  user: _id
                });

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function movements(_x11) {
        return _movements.apply(this, arguments);
      }

      return movements;
    }()
  }
};
exports["default"] = _default;
//# sourceMappingURL=user.js.map