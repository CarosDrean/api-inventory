import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    user: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    dni: { type: Number, required: true },
    role: { type: String, required: true }, // admin or user
    movements: [{ type: Schema.Types.ObjectId, ref: 'Movement' }],
    address: { type: String },
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
})

export default model('User', userSchema)