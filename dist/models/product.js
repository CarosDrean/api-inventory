"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  measure: {
    type: String
  },
  stock: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  },
  costo: {
    type: Number
  },
  inventory: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  }
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;
//# sourceMappingURL=product.js.map