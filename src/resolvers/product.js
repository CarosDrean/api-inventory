import Product from '../models/product'

export default {
    Query: {
        product: async(_, { _id }) => {
            return await Product.findById(_id).exec()
        },
        products: async() => {
            return await Product.find()
        }
    },
    Mutation: {
        createProduct: async(_, { input }) => {
            const product = new Product(input)
            return await product.save()
        },
        deleteProduct: async(_, { _id }) => {
            return await Product.findByIdAndDelete(_id)
        },
        updateProduct: async(_, { _id, input }) => {
            return await Product.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}