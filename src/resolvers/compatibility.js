import Compatibility from '../models/compatibility'

export default {
    Query: {
        compatibility: async(_, { _id }) => {
            return await Compatibility.findById(_id).exec()
        },
        compatibilitys: async() => {
            return await Compatibility.find()
        }
    },
    Mutation: {
        createCompatibility: async(_, { input }) => {
            const compatibility = new Compatibility(input)
            return await compatibility.save()
        },
        deleteCompatibility: async(_, { _id }) => {
            return await Compatibility.findByIdAndDelete(_id)
        },
        updateCompatibility: async(_, { _id, input }) => {
            return await Compatibility.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}