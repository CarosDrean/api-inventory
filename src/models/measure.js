import { Schema, model } from 'mongoose'

const measureSchema = new Schema({
    name: { type: String, required: true },
    denomination: { type: String, required: true }
})

export default model('Measure', measureSchema)