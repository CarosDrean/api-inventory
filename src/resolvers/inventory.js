import Inventory from '../models/inventory'
import Product from '../models/product'
import Category from '../models/category'
import Movement from '../models/movement'
import permission from '../middlewares/permissions'

export default {
    Query: {
        inventory: async(_, { _id }, { user, role }) => {
            permission.isAuthenticated(user)
            return await Inventory.findById(_id).exec()
        },
        inventorys: async(_, args, { user, role }) => {
            permission.isAdmin(user, role)
            return await Inventory.find().sort({_id: -1})
        }
    },
    Mutation: {
        createInventory: async(_, { input }, { user, role }) => {
            permission.isAdmin(user, role)
            const inventory = new Inventory(input)
            return await inventory.save()
        },
        deleteInventory: async(_, { _id }, { user, role }) => {
            permission.isAdmin(user, role)
            return await Inventory.findByIdAndDelete(_id)
        },
        updateInventory: async(_, { _id, input }, { user, role }) => {
            permission.isAdmin(user, role)
            return await Inventory.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Inventory: {
        products: async({ _id }) => {
            return await Product.find({ inventory: _id })
        },
        categorys: async({ _id }) => {
            return await Category.find({ inventory: _id })
        },
        movements: async({ _id }) => {
            return await Movement.find({ inventory: _id })
        },
    }
}