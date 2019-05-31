export default `
    type Measure {
        _id: ID
        name: String!
        denomination: String!
    }

    input MeasureInput {
        name: String!
        denomination: String!
    }

    type Query {
        Measure(_id: ID!): Measure
        Measures: [Measure]
    }

    type Mutation {
        createMeasure(input: MeasureInput): Measure
        deleteMeasure(_id: ID): Measure
        updateMeasure(_id: ID, input: MeasureInput): Measure
    }
`