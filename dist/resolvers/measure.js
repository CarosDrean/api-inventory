"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _measure2 = _interopRequireDefault(require("../models/measure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    measure: function () {
      var _measure = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var _id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = _ref._id;
                _context.next = 3;
                return _measure2["default"].findById(_id).exec();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function measure(_x, _x2) {
        return _measure.apply(this, arguments);
      }

      return measure;
    }(),
    measures: function () {
      var _measures = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _measure2["default"].find();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function measures() {
        return _measures.apply(this, arguments);
      }

      return measures;
    }()
  },
  Mutation: {
    createMeasure: function () {
      var _createMeasure = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_, _ref2) {
        var input, measure;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                input = _ref2.input;
                measure = new _measure2["default"](input);
                _context3.next = 4;
                return measure.save();

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createMeasure(_x3, _x4) {
        return _createMeasure.apply(this, arguments);
      }

      return createMeasure;
    }(),
    deleteMeasure: function () {
      var _deleteMeasure = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_, _ref3) {
        var _id;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = _ref3._id;
                _context4.next = 3;
                return _measure2["default"].findByIdAndDelete(_id);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteMeasure(_x5, _x6) {
        return _deleteMeasure.apply(this, arguments);
      }

      return deleteMeasure;
    }(),
    updateMeasure: function () {
      var _updateMeasure = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_, _ref4) {
        var _id, input;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref4._id, input = _ref4.input;
                _context5.next = 3;
                return _measure2["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateMeasure(_x7, _x8) {
        return _updateMeasure.apply(this, arguments);
      }

      return updateMeasure;
    }()
  }
};
exports["default"] = _default;
//# sourceMappingURL=measure.js.map