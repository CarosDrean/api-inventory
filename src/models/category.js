import { Schema, model } from 'mongoose'

const categorySchema= new Schema({
    name : { type:String, required:true},
    denomination: { type: String, required: true },
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
})

export default model('Category', categorySchema)