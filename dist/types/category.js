"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Category {\n        _id: ID\n        name: String!\n        denomination: String!\n        inventory: Inventory\n    }\n\n    input CategoryInput {\n        name: String!\n        denomination: String!\n        inventory: ID\n    }\n\n    type Query {\n        category(_id: ID!): Category\n        categorys: [Category]\n    }\n\n    type Mutation {\n        createCategory(input: CategoryInput): Category\n        deleteCategory(_id: ID): Category\n        updateCategory(_id: ID, input: CategoryInput): Category\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=category.js.map