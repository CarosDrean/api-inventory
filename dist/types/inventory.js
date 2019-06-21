"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Inventory {\n        _id: ID\n        name: String!\n        description: String!\n        products: [Product]\n        categorys: [Category]\n        movements: [Movement]\n    }\n\n    input InventoryInput {\n        name: String!\n        description: String!\n    }\n\n    type Query {\n        inventory(_id: ID!): Inventory\n        inventorys: [Inventory]\n    }\n\n    type Mutation {\n        createInventory(input: InventoryInput): Inventory\n        deleteInventory(_id: ID): Inventory\n        updateInventory(_id: ID, input: InventoryInput): Inventory\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=inventory.js.map