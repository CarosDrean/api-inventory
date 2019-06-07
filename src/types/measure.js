export default `
    type Measure {
        _id: ID
        name: String!
        denomination: String!
        inventory: Inventory
    }

    input MeasureInput {
        name: String!
        denomination: String!
        inventory: ID
    }

    type Query {
        measure(_id: ID!): Measure
        measures: [Measure]
        measuresInventory(inventory: ID!): [Measure]
    }

    type Mutation {
        createMeasure(input: MeasureInput): Measure
        deleteMeasure(_id: ID): Measure
        updateMeasure(_id: ID, input: MeasureInput): Measure
    }
`