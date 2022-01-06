import dbConnect from '../../../lib/dbConnect'
import Storesdrinks from '../../../models/Storesdrinks'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const drink = await Storesdrinks.findById(req.query.id)
                res.status(200).json({ success: true, data: drink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const drink = await Storesdrinks.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: drink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const drink = await Storesdrinks.findOneAndRemove(req.query.id);
                res.status(200).json({ success: true, data: drink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
