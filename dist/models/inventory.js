"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var inventorySchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  products: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  categories: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  movements: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Movement'
  }]
});

var _default = (0, _mongoose.model)('Inventory', inventorySchema);

exports["default"] = _default;
//# sourceMappingURL=inventory.js.map