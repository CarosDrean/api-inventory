export default `
    type Compatibility {
        _id: ID
        name: String!
        inventory: Inventory
    }

    input CompatibilityInput {
        name: String!
        inventory: ID
    }

    type Query {
        compatibility(_id: ID!): Compatibility
        compatibilitys: [Compatibility]
        compatibilitysInventory(inventory: ID!): [Compatibility]
    }

    type Mutation {
        createCompatibility(input: CompatibilityInput): Compatibility
        deleteCompatibility(_id: ID): Compatibility
        updateCompatibility(_id: ID, input: CompatibilityInput): Compatibility
    }
`