// models/User.js

import mongoose from 'mongoose'

const AddStoreSchema = new mongoose.Schema({
    namestore: String,
})

module.exports = mongoose.models.AddStore || mongoose.model('AddStore', AddStoreSchema)