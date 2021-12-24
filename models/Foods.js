
import mongoose from 'mongoose'

const AddFoodsSchema = new mongoose.Schema({
    name: String,
    staple: String,
    step: String,
    img: String,
})
module.exports = mongoose.models.AddFoods || mongoose.model('AddFoods', AddFoodsSchema)