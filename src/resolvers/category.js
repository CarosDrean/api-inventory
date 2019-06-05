import Category from '../models/category'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions'

export default {
    Query: {
        category: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Category.findById(_id).exec()
        },
        categorys: async(_, args, { user, role }) => {
            permission.isUser(user, role)
            return await Category.find().sort({_id: -1})
        }
    },
    Mutation: {
        createCategory: async(_, { input }, { user, role }) => {
            permission.isUser(user, role)
            const category = new Category(input)
            return await category.save()
        },
        deleteCategory: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Category.findByIdAndDelete(_id)
        },
        updateCategory: async(_, { _id, input }, { user, role }) => {
            permission.isUser(user, role)
            return await Category.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Category: {
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}