import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: { type: String, required: true },
    user: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // admin or user
    movements: [{ type: Schema.Types.ObjectId, ref: 'Movement' }],
    inventory: { type: Schema.Types.ObjectId, ref: 'Inventory' }
})

export default model('User', userSchema)