"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Error{\n        path: String!\n        message: String!\n    }\n\n    type Response {\n        success: Boolean!\n        token: String\n        user: User\n        errors: [Error]\n    }\n\n    type User {\n        _id: ID\n        firstname: String!\n        lastname: String\n        user: String\n        password: String\n        phone: Int\n        dni: Int\n        role: String\n        movements: [Movement]\n        address: String\n        inventory: Inventory     \n    }\n\n    input UserInput {\n        firstname: String!\n        lastname: String\n        user: String\n        password: String\n        phone: Int\n        dni: Int\n        role: String\n        address: String  \n        inventory: ID\n    }\n\n    type Query {\n        user(_id: ID!): User\n        users: [User]        \n    }\n\n    type Mutation {\n        loginUser(email: String!, password: String!): Response!\n        createUser(input: UserInput): User\n        deleteUser(_id: ID): User\n        updateUser(_id: ID, input: UserInput): User\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=user.js.map