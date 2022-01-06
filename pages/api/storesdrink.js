// api/menus.js

import dbConnect from '../../lib/dbConnect'
import Storedrinks from '../../models/Storedrinks'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const Storesdrinks = await Storedrinks.find({})
        res.status(200).json({ success: true, data: Storesdrinks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const Storesdrinks = await Storedrinks.create(req.body)
        res.status(201).json({ success: true, data: Storesdrinks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}