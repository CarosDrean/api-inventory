import { Schema, model } from 'mongoose'

const productSchema= new Schema({
    name : { type: String, required: true },
    category: { type: String, required:true },
    model: { type: String, required: true },
    description: { type: String,required: true },
    trademark: { type: String, required: true },
    measure: { type: String, required: true },
    color: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    compatibility: { type: String, required:true }
})

export default model('Product', productSchema)