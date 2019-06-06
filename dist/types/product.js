"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Product {\n        _id: ID\n        name: String!\n        category: String\n        model: String\n        description: String\n        trademark: String\n        measure: String\n        color: String\n        stock: Int\n        price: Float\n        compatibility: String\n        inventory: Inventory\n    }\n\n    input ProductInput {\n        name: String!\n        category: String\n        model: String\n        description: String\n        trademark: String\n        measure: String\n        color: String\n        stock: Int\n        price: Float\n        compatibility: String\n        inventory: ID\n    }\n\n    type Query {\n        product(_id: ID!): Product\n        products: [Product]\n    }\n\n    type Mutation {\n        createProduct(input: ProductInput): Product\n        deleteProduct(_id: ID): Product\n        updateProduct(_id: ID, input: ProductInput): Product\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=product.js.map