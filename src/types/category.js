export default `
    type Category {
        _id: ID
        name: String!
        denomination: String!
        inventory: Inventory
    }

    input CategoryInput {
        name: String!
        denomination: String!
        inventory: ID
    }

    type Query {
        category(_id: ID!): Category
        categorys: [Category]
        categorysInventory(inventory: ID!): [Category]
    }

    type Mutation {
        createCategory(input: CategoryInput): Category
        deleteCategory(_id: ID): Category
        updateCategory(_id: ID, input: CategoryInput): Category
    }
`