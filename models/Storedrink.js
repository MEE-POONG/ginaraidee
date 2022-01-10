// models/User.js

import mongoose from 'mongoose'

const AddStoredrinkSchema = new mongoose.Schema({
    namestoredrink: String,
    img:String,
    detail: String
})

module.exports = mongoose.models.AddStoredrink || mongoose.model('AddStoredrink', AddStoredrinkSchema)