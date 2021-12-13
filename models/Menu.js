// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    namemenu: String,
    staple: String,
    step: String,
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)