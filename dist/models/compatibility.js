"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var compabilitySchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  denomination: {
    type: String,
    required: true
  },
  inventory: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  }
});

var _default = (0, _mongoose.model)('Compatibility', compabilitySchema);

exports["default"] = _default;
//# sourceMappingURL=compatibility.js.map