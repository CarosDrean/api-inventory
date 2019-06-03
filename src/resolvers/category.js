import Category from '../models/category'
import permission from '../middlewares/permissions'

export default {
    Query: {
        category: async(_, { _id }, { user, role }) => {
            if(!user) throw new Error("No autenticado")            
            return await Category.findById(_id).exec()
        },
        categorys: async(_, args, { user, role }) => {
            permission.isUser(user, role)
            return await Category.find()
        }
    },
    Mutation: {
        createCategory: async(_, { input }) => {
            const category = new Category(input)
            return await category.save()
        },
        deleteCategory: async(_, { _id }) => {
            return await Category.findByIdAndDelete(_id)
        },
        updateCategory: async(_, { _id, input }) => {
            return await Category.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}