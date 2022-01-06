// models/User.js

import mongoose from 'mongoose'

const AddStoredrinkSchema = new mongoose.Schema({
    namestore: String,
    img:String
})

module.exports = mongoose.models.AddStoredrink || mongoose.model('AddStoredrink', AddStoredrinkSchema)