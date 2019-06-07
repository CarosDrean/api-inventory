"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Measure {\n        _id: ID\n        name: String!\n        denomination: String!\n        inventory: Inventory\n    }\n\n    input MeasureInput {\n        name: String!\n        denomination: String!\n        inventory: ID\n    }\n\n    type Query {\n        measure(_id: ID!): Measure\n        measures: [Measure]\n        measuresInventory(inventory: ID!): [Measure]\n    }\n\n    type Mutation {\n        createMeasure(input: MeasureInput): Measure\n        deleteMeasure(_id: ID): Measure\n        updateMeasure(_id: ID, input: MeasureInput): Measure\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=measure.js.map