import dbConnect from '../../../lib/dbConnect'
import Storedrink from '../../../models/Storedrink'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const storedrink = await Storedrink.findById(req.query.id)
                res.status(200).json({ success: true, data: storedrink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const storedrink = await Storedrink.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: storedrink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const storedrink = await Storedrink.deleteOne({_id:req.query.id});
                res.status(200).json({ success: true, data: storedrink })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
