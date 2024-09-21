import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    dodid: {type: Number, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tryAttempts: {type: Number, required: false, default: 0},
    enabled: {type: Boolean, required: false, default: true},
})

const UserModel = mongoose.model('Users', UserSchema)