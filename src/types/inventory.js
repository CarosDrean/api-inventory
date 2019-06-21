export default `
    type Inventory {
        _id: ID
        name: String!
        description: String!
        products: [Product]
        categorys: [Category]
        movements: [Movement]
    }

    input InventoryInput {
        name: String!
        description: String!
    }

    type Query {
        inventory(_id: ID!): Inventory
        inventorys: [Inventory]
    }

    type Mutation {
        createInventory(input: InventoryInput): Inventory
        deleteInventory(_id: ID): Inventory
        updateInventory(_id: ID, input: InventoryInput): Inventory
    }
`