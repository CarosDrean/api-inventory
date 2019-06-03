"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _cors = _interopRequireDefault(require("cors"));

var _schema = _interopRequireDefault(require("./schema"));

var _database = require("./database");

var _config = require("./config");

var _auth = _interopRequireDefault(require("./middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _database.connect)();
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: ['https://lapizcero-secre.firebaseapp.com', 'http://localhost:4200']
}));
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome!'
  });
});
app.use(_auth["default"].checkHeaders);
app.use('/graphql', (0, _expressGraphql["default"])(function (req) {
  return {
    graphiql: true,
    schema: _schema["default"],
    context: {
      user: req.user,
      role: req.role
    }
  };
}));
app.listen(_config.PORT, function () {
  console.log('Server online!');
});
//# sourceMappingURL=index.js.map