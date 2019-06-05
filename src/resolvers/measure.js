import Measure from '../models/measure'
import Inventory from '../models/inventory'
import permission from '../middlewares/permissions';

export default {
    Query: {
        measure: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Measure.findById(_id).exec()
        },
        measures: async(_, args, { user, role }) => {
            permission.isUser(user, role)
            return await Measure.find().sort({_id: -1})
        }
    },
    Mutation: {
        createMeasure: async(_, { input }, { user, role }) => {
            permission.isUser(user, role)
            const measure = new Measure(input)
            return await measure.save()
        },
        deleteMeasure: async(_, { _id }, { user, role }) => {
            permission.isUser(user, role)
            return await Measure.findByIdAndDelete(_id)
        },
        updateMeasure: async(_, { _id, input }, { user, role }) => {
            permission.isUser(user, role)
            return await Measure.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Measure: {
        inventory: async({ inventory }) => {
            return await Inventory.findById({ _id: inventory })
        }
    }
}