export default `
    type Error{
        path: String!
        message: String!
    }

    type Response {
        success: Boolean!
        token: String
        user: User
        errors: [Error]
    }

    type User {
        _id: ID
        name: String
        user: String
        password: String
        role: String
        movements: [Movement]
        inventory: String     
    }

    input UserInput {
        name: String
        user: String
        password: String
        role: String
        inventory: ID
    }

    type Query {
        user(_id: ID!): User
        users: [User]        
    }

    type Mutation {
        loginUser(email: String!, password: String!): Response!
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }
`