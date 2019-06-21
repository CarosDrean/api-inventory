"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n    type Error{\n        path: String!\n        message: String!\n    }\n\n    type Response {\n        success: Boolean!\n        token: String\n        user: User\n        errors: [Error]\n    }\n\n    type User {\n        _id: ID\n        name: String\n        user: String\n        password: String\n        role: String\n        movements: [Movement]\n        inventory: String     \n    }\n\n    input UserInput {\n        name: String\n        user: String\n        password: String\n        role: String\n        inventory: ID\n    }\n\n    type Query {\n        user(_id: ID!): User\n        users: [User]        \n    }\n\n    type Mutation {\n        loginUser(email: String!, password: String!): Response!\n        createUser(input: UserInput): User\n        deleteUser(_id: ID): User\n        updateUser(_id: ID, input: UserInput): User\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=user.js.map