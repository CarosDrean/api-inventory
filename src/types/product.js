export default `
    type Product {
        _id: ID
        name: String
        category: String
        description: String
        measure: String
        stock: Int
        price: Float
        costo: Float
        inventory: Inventory
    }

    input ProductInput {
        name: String
        category: String
        description: String
        measure: String
        stock: Int
        price: Float
        costo: Float
        inventory: ID
    }

    type Query {
        product(_id: ID!): Product
        products: [Product]
        productsInventory(inventory: ID!): [Product]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        deleteProduct(_id: ID): Product
        updateProduct(_id: ID, input: ProductInput): Product
    }
`