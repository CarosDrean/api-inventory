import Product from '../models/product'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions';

export default {
    Query: {
        product: async(_, { _id }, { user, role }) => {
            permission.isAuthenticated(user)
            return await Product.findById(_id).exec()
        },
        products: async(_, args, { user, role }) => {
            permission.isAuthenticated(user)
            return await Product.find().sort({_id: -1})
        }
    },
    Mutation: {
        createProduct: async(_, { input }, { user, role }) => {
            permission.isUser(user, role)
            const product = new Product(input)
            return await product.save()
        },
        deleteProduct: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Product.findByIdAndDelete(_id)
        },
        updateProduct: async(_, { _id, input }, { user, role }) => {
            permission.isUser(user, role)
            return await Product.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Product: {
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}