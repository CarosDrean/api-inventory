import { Schema, model } from 'mongoose'

const compabilitySchema= new Schema({
    name : { type:String, required:true},
})

export default model('Compatibility', compabilitySchema)