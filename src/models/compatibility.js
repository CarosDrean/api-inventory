import { Schema, model } from 'mongoose'

const compabilitySchema= new Schema({
    name : { type:String, required:true},
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
})

export default model('Compatibility', compabilitySchema)