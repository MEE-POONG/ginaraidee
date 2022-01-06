// api/menus.js

import dbConnect from '../../../../lib/dbConnect'
import Drink from '../../../../models/Drink'
import mongoose from 'mongoose'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const drink = await Drink.find({storedrinkId:mongoose.Types.ObjectId(req.query.storedrinkId)})
        res.status(200).json({ success: true, data: drink })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const drink = await Drink.create(req.body)
        res.status(201).json({ success: true, data: drink })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}