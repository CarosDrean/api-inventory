"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  // admin or user
  movements: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Movement'
  }],
  address: {
    type: String
  }
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;
//# sourceMappingURL=user.js.map