"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _category = _interopRequireDefault(require("./category"));

var _movement = _interopRequireDefault(require("./movement"));

var _product = _interopRequireDefault(require("./product"));

var _user = _interopRequireDefault(require("./user"));

var _inventory = _interopRequireDefault(require("./inventory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typeDefs = [_category["default"], _movement["default"], _product["default"], _user["default"], _inventory["default"]];

var _default = (0, _mergeGraphqlSchemas.mergeTypes)(typeDefs, {
  all: true
});

exports["default"] = _default;
//# sourceMappingURL=index.js.map