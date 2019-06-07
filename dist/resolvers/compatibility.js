"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compatibility2 = _interopRequireDefault(require("../models/compatibility"));

var _inventory3 = _interopRequireDefault(require("../models/inventory"));

var _permissions = _interopRequireDefault(require("../middlewares/permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    compatibility: function () {
      var _compatibility = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref, _ref2) {
        var _id, user, role;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _ref._id;
                user = _ref2.user, role = _ref2.role;

                _permissions["default"].isUser(user, role);

                _context.next = 5;
                return _compatibility2["default"].findById(_id).exec();

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function compatibility(_x, _x2, _x3) {
        return _compatibility.apply(this, arguments);
      }

      return compatibility;
    }(),
    compatibilitys: function () {
      var _compatibilitys = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_, args, _ref3) {
        var user, role;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = _ref3.user, role = _ref3.role;

                _permissions["default"].isUser(user, role);

                _context2.next = 4;
                return _compatibility2["default"].find().sort({
                  _id: -1
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function compatibilitys(_x4, _x5, _x6) {
        return _compatibilitys.apply(this, arguments);
      }

      return compatibilitys;
    }(),
    compatibilitysInventory: function () {
      var _compatibilitysInventory = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_, _ref4, _ref5) {
        var inventory, user, role;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                inventory = _ref4.inventory;
                user = _ref5.user, role = _ref5.role;

                _permissions["default"].isUser(user, role);

                _context3.next = 5;
                return _compatibility2["default"].find({
                  inventory: inventory
                }).sort({
                  _id: -1
                });

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function compatibilitysInventory(_x7, _x8, _x9) {
        return _compatibilitysInventory.apply(this, arguments);
      }

      return compatibilitysInventory;
    }()
  },
  Mutation: {
    createCompatibility: function () {
      var _createCompatibility = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_, _ref6, _ref7) {
        var input, user, role, compatibility;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                input = _ref6.input;
                user = _ref7.user, role = _ref7.role;

                _permissions["default"].isUser(user, role);

                compatibility = new _compatibility2["default"](input);
                _context4.next = 6;
                return compatibility.save();

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createCompatibility(_x10, _x11, _x12) {
        return _createCompatibility.apply(this, arguments);
      }

      return createCompatibility;
    }(),
    deleteCompatibility: function () {
      var _deleteCompatibility = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_, _ref8, _ref9) {
        var _id, user, role;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref8._id;
                user = _ref9.user, role = _ref9.role;

                _permissions["default"].isUser(user, role);

                _context5.next = 5;
                return _compatibility2["default"].findByIdAndDelete(_id);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteCompatibility(_x13, _x14, _x15) {
        return _deleteCompatibility.apply(this, arguments);
      }

      return deleteCompatibility;
    }(),
    updateCompatibility: function () {
      var _updateCompatibility = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(_, _ref10, _ref11) {
        var _id, input, user, role;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _id = _ref10._id, input = _ref10.input;
                user = _ref11.user, role = _ref11.role;

                _permissions["default"].isUser(user, role);

                _context6.next = 5;
                return _compatibility2["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateCompatibility(_x16, _x17, _x18) {
        return _updateCompatibility.apply(this, arguments);
      }

      return updateCompatibility;
    }()
  },
  Compatibility: {
    inventory: function () {
      var _inventory2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(_ref12) {
        var _inventory;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _inventory = _ref12.inventory;
                _context7.next = 3;
                return _inventory3["default"].findById({
                  _id: _inventory
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

      function inventory(_x19) {
        return _inventory2.apply(this, arguments);
      }

      return inventory;
    }()
  }
};
exports["default"] = _default;
//# sourceMappingURL=compatibility.js.map