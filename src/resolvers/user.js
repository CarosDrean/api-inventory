import auth from '../middlewares/auth'
import User from '../models/user'
import Movement from '../models/movement'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions';

export default {
    Query: {
        user: async(_, { _id }, { user, role }) => {
            permission.isAuthenticated(user)
            return await User.findById(_id).exec()
        },
        users: async(_, args, { user, role }) => {
            permission.isAdmin(user, role)
            return await User.find().sort({_id: -1})
        }
    },
    Mutation: {
        loginUser: async (_, { email, password }) => auth.login(email, password),
        createUser: async(_, { input }, { user, role }) => {
            permission.isAdmin(user, role)
            const userDB = new User(input)
            return await userDB.save()
        },
        deleteUser: async(_, { _id }, { user, role }) => {
            permission.isAuthenticated(user)
            return await User.findByIdAndDelete(_id)
        },
        updateUser: async(_, { _id, input }, { user, role }) => {
            permission.isAuthenticated(user)
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    User: {
        movements: async({ _id }) => {
            return await Movement.find({ user: _id })
        },
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}