// api/menus.js

import dbConnect from '../../../lib/dbConnect'
import Drink from '../../../models/Drink'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const drinks = await Drink.find({})
        res.status(200).json({ success: true, data: drinks })
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