// api/menus.js

import dbConnect from '../../lib/dbConnect'
import Store from '../../models/Store'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const stores = await Store.find({})
        res.status(200).json({ success: true, data: stores })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const stores = await Store.create(req.body)
        res.status(201).json({ success: true, data: stores })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}