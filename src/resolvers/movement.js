import Movement from '../models/movement'
import Product from '../models/product'
import User from '../models/user'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions';

export default {
    Query: {
        movement: async(_, { _id }, { user, role }) => {
            permission.isAuthenticated(user)
            return await Movement.findById(_id).exec()
        },
        movements: async(_, args, { user, role }) => {
            permission.isAuthenticated(user)
            return await Movement.find().sort({_id: -1})
        }
    },
    Mutation: {
        createMovement: async(_, { input }, { user, role }) => {
            permission.isUser(user, role)
            const movement = new Movement(input)
            return await movement.save()
        },
        deleteMovement: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Movement.findByIdAndDelete(_id)
        },
        updateMovement: async(_, { _id, input }, { user, role }) => {
            permission.isUser(user, role)
            return await Movement.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Movement: {
        product: async({ product }) => {
            return await Product.findById({ _id: product })
        },
        user: async({ user }) => {
            return await User.findById({ _id: user })
        },
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}