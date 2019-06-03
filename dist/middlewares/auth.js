"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user2 = _interopRequireDefault(require("../models/user"));

var _config = require("../config");

var _permissions = _interopRequireDefault(require("../middlewares/permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var auth = {};
var role;
var userTemp;

function getRole(user) {
  console.log('role: ' + role);

  if (userTemp !== undefined) {
    if (userTemp !== user) role = undefined;
  }

  if (user) {
    if (role === undefined) {
      userTemp = user;

      _permissions["default"].getRoleUser(user).then(function (rol) {
        console.log('Actualizando role: ' + rol);
        role = rol;
      });
    }
  }

  return role;
}

auth.checkHeaders =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, _jwt$verify, user, newToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers["x-token"];

            if (!token) {
              _context.next = 18;
              break;
            }

            _context.prev = 2;
            console.log('intentando...');
            _jwt$verify = _jsonwebtoken["default"].verify(token, _config.SECRET_TOKEN), user = _jwt$verify.user; // const {role} = await User.findOne({ _id: user }, {role: 1})

            req.role = getRole(user);
            req.user = user;
            _context.next = 18;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            //INVALID token
            console.log('nuevamente intentando...');
            _context.next = 14;
            return auth.checkToken(token);

          case 14:
            newToken = _context.sent;
            // const {role} = await User.findOne({ _id: newToken.user }, {role: 1})
            req.role = role;
            req.user = getRole(newToken.user);

            if (newToken.token) {
              res.set("Access-Control-Expose-Headers", "x-token");
              res.set("x-token", newToken.token);
            }

          case 18:
            next();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

auth.checkToken =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(token) {
    var idUser, _ref3, _user, user, newToken;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idUser = null;
            _context2.prev = 1;
            _context2.next = 4;
            return _jsonwebtoken["default"].decode(token);

          case 4:
            _ref3 = _context2.sent;
            _user = _ref3.user;
            idUser = _user;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", {});

          case 12:
            _context2.next = 14;
            return _user2["default"].findOne({
              _id: idUser
            });

          case 14:
            user = _context2.sent;
            newToken = auth.getToken(user);
            return _context2.abrupt("return", {
              user: user._id,
              token: newToken
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}();

auth.getToken = function (_ref4) {
  var _id = _ref4._id;

  var token = _jsonwebtoken["default"].sign({
    user: _id
  }, _config.SECRET_TOKEN, {
    expiresIn: '5d'
  });

  return token;
};

auth.login =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(email, password) {
    var user, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user2["default"].findOne({
              'user': email
            });

          case 2:
            user = _context3.sent;

            if (user) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", {
              success: false,
              errors: [{
                path: 'email',
                message: 'Email no existe'
              }]
            });

          case 5:
            if (!(password !== user.password)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", {
              success: false,
              errors: [{
                path: 'password',
                message: 'Password inválido'
              }]
            });

          case 7:
            token = auth.getToken(user);
            return _context3.abrupt("return", {
              success: true,
              token: token,
              errors: []
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = auth;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map