export default `
    type Product {
        _id: ID
        name: String!
        category: String
        model: String
        description: String
        trademark: String
        measure: String
        color: String
        stock: Int
        price: Float
        compatibility: String
        inventory: Inventory
    }

    input ProductInput {
        name: String!
        category: String
        model: String
        description: String
        trademark: String
        measure: String
        color: String
        stock: Int
        price: Float
        compatibility: String
        inventory: ID
    }

    type Query {
        product(_id: ID!): Product
        products: [Product]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        deleteProduct(_id: ID): Product
        updateProduct(_id: ID, input: ProductInput): Product
    }
`