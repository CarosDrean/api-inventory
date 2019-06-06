"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var movementSchema = new _mongoose.Schema({
  product: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  },
  priceUnit: {
    type: Number,
    required: true
  },
  priceTotal: {
    type: Number,
    required: true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  inventory: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  }
});

var _default = (0, _mongoose.model)('Movement', movementSchema);

exports["default"] = _default;
//# sourceMappingURL=movement.js.map