// api/menus.js

import dbConnect from '../../../lib/dbConnect'
import Foods from '../../../models/Foods'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const menus = await Foods.find({})
        res.status(200).json({ success: true, data: menus })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const menu = await Foods.create(req.body)
        res.status(201).json({ success: true, data: menu })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}