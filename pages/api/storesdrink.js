// api/menus.js

import dbConnect from '../../lib/dbConnect'
import Storedrink from '../../models/Storedrink'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const storesdrinks = await Storedrink.find({})
        res.status(200).json({ success: true, data: storesdrinks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const storesdrinks = await Storedrink.create(req.body)
        res.status(201).json({ success: true, data: storesdrinks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}