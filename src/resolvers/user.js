import User from '../models/user'
import Movement from '../models/movement'

export default {
    Query: {
        user: async(_, { _id }) => {
            return await User.findById(_id).exec()
        },
        users: async() => {
            return await User.find()
        },
        loginUser: async(_, { input }) => {
            return User.find({ email: input.email, password: input.password })
        }
    },
    Mutation: {
        createUser: async(_, { input }) => {
            const user = new User(input)
            return await user.save()
        },
        deleteUser: async(_, { _id }) => {
            return await User.findByIdAndDelete(_id)
        },
        updateUser: async(_, { _id, input }) => {
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    User: {
        movements: async({ _id }) => {
            return await Movement.find({ user: _id })
        }
    }
}