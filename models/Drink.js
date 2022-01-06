// models/User.js

import mongoose from 'mongoose'

const AddDrinkSchema = new mongoose.Schema({
    name: String,
    storedrinkId: mongoose.Types.ObjectId,
    price: Number,
    img:String
})
module.exports = mongoose.models.AddDrink || mongoose.model('AddDrink', AddDrinkSchema)