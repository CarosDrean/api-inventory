export default `
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
    
    type LoginUser {
        token: String!
        message: String!
    }

    type Query {
        user(_id: ID!): User
        users: [User]
        loginUser(email: String!, password: String!): LoginUser
    }

    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }
`