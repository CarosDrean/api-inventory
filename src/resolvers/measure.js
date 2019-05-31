import Measure from '../models/measure'

export default {
    Query: {
        measure: async(_, { _id }) => {
            return await Measure.findById(_id).exec()
        },
        measures: async() => {
            return await Measure.find()
        }
    },
    Mutation: {
        createMeasure: async(_, { input }) => {
            const measure = new Measure(input)
            return await measure.save()
        },
        deleteMeasure: async(_, { _id }) => {
            return await Measure.findByIdAndDelete(_id)
        },
        updateMeasure: async(_, { _id, input }) => {
            return await Measure.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}