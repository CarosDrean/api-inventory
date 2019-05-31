import Movement from '../models/movement'
import Product from '../models/product'
import User from '../models/user'

export default {
    Query: {
        movement: async(_, { _id }) => {
            return await Movement.findById(_id).exec()
        },
        movements: async() => {
            return await Movement.find()
        }
    },
    Mutation: {
        createMovement: async(_, { input }) => {
            const movement = new Movement(input)
            return await movement.save()
        },
        deleteMovement: async(_, { _id }) => {
            return await Movement.findByIdAndDelete(_id)
        },
        updateMovement: async(_, { _id, input }) => {
            return await Movement.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Movement: {
        product: async({ product }) => {
            return await Product.findById({ _id: product })
        },
        user: async({ user }) => {
            return await User.findById({ _id: user })
        }
    }
}