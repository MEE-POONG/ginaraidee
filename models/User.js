// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  rawmaterial: String,
  stepfood: String,
  
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)