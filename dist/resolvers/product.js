"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product2 = _interopRequireDefault(require("../models/product"));

var _inventory3 = _interopRequireDefault(require("../models/inventory"));

var _permissions = _interopRequireDefault(require("../middlewares/permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    product: function () {
      var _product = _asyncToGenerator(
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
                return _product2["default"].findById(_id).exec();

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function product(_x, _x2, _x3) {
        return _product.apply(this, arguments);
      }

      return product;
    }(),
    products: function () {
      var _products = _asyncToGenerator(
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
                return _product2["default"].find().sort({
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

      function products(_x4, _x5, _x6) {
        return _products.apply(this, arguments);
      }

      return products;
    }()
  },
  Mutation: {
    createProduct: function () {
      var _createProduct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_, _ref4, _ref5) {
        var input, user, role, product;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                input = _ref4.input;
                user = _ref5.user, role = _ref5.role;

                _permissions["default"].isUser(user, role);

                product = new _product2["default"](input);
                _context3.next = 6;
                return product.save();

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createProduct(_x7, _x8, _x9) {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }(),
    deleteProduct: function () {
      var _deleteProduct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_, _ref6, _ref7) {
        var _id, user, role;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = _ref6._id;
                user = _ref7.user, role = _ref7.role;

                _permissions["default"].isUser(user, role);

                _context4.next = 5;
                return _product2["default"].findByIdAndDelete(_id);

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteProduct(_x10, _x11, _x12) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }(),
    updateProduct: function () {
      var _updateProduct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_, _ref8, _ref9) {
        var _id, input, user, role;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref8._id, input = _ref8.input;
                user = _ref9.user, role = _ref9.role;

                _permissions["default"].isUser(user, role);

                _context5.next = 5;
                return _product2["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateProduct(_x13, _x14, _x15) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  },
  Product: {
    inventory: function () {
      var _inventory2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(_ref10) {
        var _inventory;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _inventory = _ref10.inventory;
                _context6.next = 3;
                return _inventory3["default"].findById({
                  _id: _inventory
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

      function inventory(_x16) {
        return _inventory2.apply(this, arguments);
      }

      return inventory;
    }()
  }
};
exports["default"] = _default;
//# sourceMappingURL=product.js.map