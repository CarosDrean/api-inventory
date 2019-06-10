import { Schema, model } from 'mongoose'

const movementSchema= new Schema({
    product: { type:Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type:Number, required:true },
    pricePurchase: { type:Number },
    priceUnit: { type:Number, required:true },
    priceTotal: { type:Number,required:true },
    user: { type:Schema.Types.ObjectId, ref:'User' },
    date: { type:String, required:true },
    time: { type:String, required:true },
    type: { type:String, required:true },
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
    // TODO: hacer que aya una configuracion de usuario para establecer el precio, aqunque no tmbien podria ser
})

export default model('Movement', movementSchema)