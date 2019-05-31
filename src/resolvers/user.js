import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from '../config'
import auth from '../middlewares/auth'
import User from '../models/user'
import Movement from '../models/movement'

export default {
    Query: {
        user: async(_, { _id }) => {
            return await User.findById(_id).exec()
        },
        users: async() => {
            return await User.find()
        }
    },
    Mutation: {
        loginUser: async (_, { email, password }) => auth.login(email, password),
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