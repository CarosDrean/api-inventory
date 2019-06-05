export default `
    type Movement {
        _id: ID
        product: Product
        quantity: Int
        priceUnit: Float
        priceTotal: Float
        user: User
        date: String
        time: String
        type: String
        inventory: Inventory
    }

    input MovementInput {
        product: ID
        quantity: Int
        priceUnit: Float
        priceTotal: Float
        user: ID
        date: String
        time: String
        type: String
        inventory: ID
    }

    type Query {
        movement(_id: ID!): Movement
        movements: [Movement]
    }

    type Mutation {
        createMovement(input: MovementInput): Movement
        deleteMovement(_id: ID): Movement
        updateMovement(_id: ID, input: MovementInput): Movement
    }
`