export default `
    type Compatibility {
        _id: ID
        name: String!
    }

    input CompatibilityInput {
        name: String!
    }

    type Query {
        Compatibility(_id: ID!): Compatibility
        Compatibilitys: [Compatibility]
    }

    type Mutation {
        createCompatibility(input: CompatibilityInput): Compatibility
        deleteCompatibility(_id: ID): Compatibility
        updateCompatibility(_id: ID, input: CompatibilityInput): Compatibility
    }
`