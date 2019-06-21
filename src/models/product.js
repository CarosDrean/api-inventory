import { Schema, model } from 'mongoose'

const productSchema= new Schema({
    name : { type: String, required: true },
    category: { type: String },
    description: { type: String },
    measure: { type: String },
    stock: { type: Number },
    price: { type: Number, required: true },
    costo: { type: Number },
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
})

export default model('Product', productSchema)