import Compatibility from '../models/compatibility'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions';

export default {
    Query: {
        compatibility: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Compatibility.findById(_id).exec()
        },
        compatibilitys: async(_, args, { user, role }) => {
            permission.isUser(user, role)
            return await Compatibility.find().sort({_id: -1})
        }
    },
    Mutation: {
        createCompatibility: async(_, { input }, { user, role }) => {
            permission.isUser(user, role)
            const compatibility = new Compatibility(input)
            return await compatibility.save()
        },
        deleteCompatibility: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Compatibility.findByIdAndDelete(_id)
        },
        updateCompatibility: async(_, { _id, input }, { user, role }) => {
            permission.isUser(user, role)
            return await Compatibility.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Compatibility: {
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}