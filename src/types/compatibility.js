export default `
    type Compatibility {
        _id: ID
        name: String!
    }

    input CompatibilityInput {
        name: String!
    }

    type Query {
        compatibility(_id: ID!): Compatibility
        compatibilitys: [Compatibility]
    }

    type Mutation {
        createCompatibility(input: CompatibilityInput): Compatibility
        deleteCompatibility(_id: ID): Compatibility
        updateCompatibility(_id: ID, input: CompatibilityInput): Compatibility
    }
`