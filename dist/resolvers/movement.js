"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _movement2 = _interopRequireDefault(require("../models/movement"));

var _product3 = _interopRequireDefault(require("../models/product"));

var _user3 = _interopRequireDefault(require("../models/user"));

var _inventory3 = _interopRequireDefault(require("../models/inventory"));

var _permissions = _interopRequireDefault(require("../middlewares/permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    movement: function () {
      var _movement = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref, _ref2) {
        var _id, user, role;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _ref._id;
                user = _ref2.user, role = _ref2.role;

                _permissions["default"].isAuthenticated(user);

                _context.next = 5;
                return _movement2["default"].findById(_id).exec();

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function movement(_x, _x2, _x3) {
        return _movement.apply(this, arguments);
      }

      return movement;
    }(),
    movements: function () {
      var _movements = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_, args, _ref3) {
        var user, role;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = _ref3.user, role = _ref3.role;

                _permissions["default"].isAuthenticated(user);

                _context2.next = 4;
                return _movement2["default"].find().sort({
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

      function movements(_x4, _x5, _x6) {
        return _movements.apply(this, arguments);
      }

      return movements;
    }(),
    movementsInventory: function () {
      var _movementsInventory = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_, _ref4, _ref5) {
        var inventory, user, role;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                inventory = _ref4.inventory;
                user = _ref5.user, role = _ref5.role;

                _permissions["default"].isAuthenticated(user);

                _context3.next = 5;
                return _movement2["default"].find({
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

      function movementsInventory(_x7, _x8, _x9) {
        return _movementsInventory.apply(this, arguments);
      }

      return movementsInventory;
    }()
  },
  Mutation: {
    createMovement: function () {
      var _createMovement = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_, _ref6, _ref7) {
        var input, user, role, movement;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                input = _ref6.input;
                user = _ref7.user, role = _ref7.role;

                _permissions["default"].isUser(user, role);

                movement = new _movement2["default"](input);
                _context4.next = 6;
                return movement.save();

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createMovement(_x10, _x11, _x12) {
        return _createMovement.apply(this, arguments);
      }

      return createMovement;
    }(),
    deleteMovement: function () {
      var _deleteMovement = _asyncToGenerator(
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
                return _movement2["default"].findByIdAndDelete(_id);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteMovement(_x13, _x14, _x15) {
        return _deleteMovement.apply(this, arguments);
      }

      return deleteMovement;
    }(),
    updateMovement: function () {
      var _updateMovement = _asyncToGenerator(
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
                return _movement2["default"].findByIdAndUpdate(_id, input, {
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

      function updateMovement(_x16, _x17, _x18) {
        return _updateMovement.apply(this, arguments);
      }

      return updateMovement;
    }()
  },
  Movement: {
    product: function () {
      var _product2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(_ref12) {
        var _product;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _product = _ref12.product;
                _context7.next = 3;
                return _product3["default"].findById({
                  _id: _product
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

      function product(_x19) {
        return _product2.apply(this, arguments);
      }

      return product;
    }(),
    user: function () {
      var _user2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(_ref13) {
        var _user;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _user = _ref13.user;
                _context8.next = 3;
                return _user3["default"].findById({
                  _id: _user
                });

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function user(_x20) {
        return _user2.apply(this, arguments);
      }

      return user;
    }(),
    inventory: function () {
      var _inventory2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(_ref14) {
        var _inventory;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _inventory = _ref14.inventory;
                _context9.next = 3;
                return _inventory3["default"].findById({
                  _id: _inventory
                });

              case 3:
                return _context9.abrupt("return", _context9.sent);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function inventory(_x21) {
        return _inventory2.apply(this, arguments);
      }

      return inventory;
    }()
  }
};
exports["default"] = _default;
//# sourceMappingURL=movement.js.map