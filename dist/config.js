"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET_TOKEN = exports.MONGO_URI = exports.PORT = void 0;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;
var MONGO_URI = 'mongodb://drean:fidelidad7@ds255740.mlab.com:55740/app-inventory';
exports.MONGO_URI = MONGO_URI;
var SECRET_TOKEN = 'miclavedetokens';
exports.SECRET_TOKEN = SECRET_TOKEN;
//# sourceMappingURL=config.js.map