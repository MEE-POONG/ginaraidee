// models/User.js

import mongoose from 'mongoose'

const AddStoreSchema = new mongoose.Schema({
    namestore: String,
    detail: String,
    img:String
})

module.exports = mongoose.models.AddStore || mongoose.model('AddStore', AddStoreSchema)