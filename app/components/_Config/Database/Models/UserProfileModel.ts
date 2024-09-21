import mongoose from "mongoose"

const UserProfileSchema = new mongoose.Schema({
    dodid: {type: Number, required: true, unique: true},
    rank: {type: String, required: true},
    name: {type: String, required: true},
    signature: {type: String, required: true},
    initials: {type: String, required: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    evaluator: {type: Boolean, required: true},
    companyAccess: {type: Array, required: true}
})

const UserProfileModel = mongoose.model('UserProfiles', UserProfileSchema)