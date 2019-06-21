import { Schema, model } from 'mongoose'

const inventorySchema= new Schema({
    name : { type:String, required:true},
    description: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    movements: [{ type: Schema.Types.ObjectId, ref: 'Movement' }],
})

export default model('Inventory', inventorySchema)