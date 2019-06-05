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
        firstname: String!
        lastname: String
        user: String
        password: String
        phone: Int
        dni: Int
        role: String
        movements: [Movement]
        address: String        
    }

    input UserInput {
        firstname: String!
        lastname: String
        user: String
        password: String
        phone: Int
        dni: Int
        role: String
        address: String  
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