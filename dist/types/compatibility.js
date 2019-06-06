"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Compatibility {\n        _id: ID\n        name: String!\n        inventory: Inventory\n    }\n\n    input CompatibilityInput {\n        name: String!\n        inventory: ID\n    }\n\n    type Query {\n        compatibility(_id: ID!): Compatibility\n        compatibilitys: [Compatibility]\n    }\n\n    type Mutation {\n        createCompatibility(input: CompatibilityInput): Compatibility\n        deleteCompatibility(_id: ID): Compatibility\n        updateCompatibility(_id: ID, input: CompatibilityInput): Compatibility\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=compatibility.js.map