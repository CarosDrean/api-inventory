export default `
    type Category {
        _id: ID
        name: String!
        denomination: String!
    }

    input CategoryInput {
        name: String!
        denomination: String!
    }

    type Query {
        category(_id: ID!): Category
        categorys: [Category]
    }

    type Mutation {
        createCategory(input: CategoryInput): Category
        deleteCategory(_id: ID): Category
        updateCategory(_id: ID, input: CategoryInput): Category
    }
`