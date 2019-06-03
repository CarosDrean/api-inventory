"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Movement {\n        _id: ID\n        product: Product\n        quantity: Int\n        priceUnit: Float\n        priceTotal: Float\n        user: User\n        date: String\n        time: String\n        type: String\n    }\n\n    input MovementInput {\n        product: ID\n        quantity: Int\n        priceUnit: Float\n        priceTotal: Float\n        user: ID\n        date: String\n        time: String\n        type: String\n    }\n\n    type Query {\n        movement(_id: ID!): Movement\n        movements: [Movement]\n    }\n\n    type Mutation {\n        createMovement(input: MovementInput): Movement\n        deleteMovement(_id: ID): Movement\n        updateMovement(_id: ID, input: MovementInput): Movement\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=movement.js.map