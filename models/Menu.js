// models/User.js

import mongoose from 'mongoose'

const AddMenuSchema = new mongoose.Schema({
    namemenu: String,
    staple: String,
    step: String,
    img: String,
    storeId: mongoose.Types.ObjectId,
    price: Number,
})
module.exports = mongoose.models.AddMenu || mongoose.model('AddMenu', AddMenuSchema)