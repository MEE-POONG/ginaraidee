// models/User.js

import mongoose from 'mongoose'

const AddMenuSchema = new mongoose.Schema({
    namemenu: String,
    staple: String,
    step: String,
    img: String,
})
module.exports = mongoose.models.AddMenu || mongoose.model('AddMenu', AddMenuSchema)