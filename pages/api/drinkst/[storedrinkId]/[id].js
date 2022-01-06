import dbConnect from '/../../../../../lib/dbConnect'
import Drink from '../../../../../models/Drink'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const drinks = await Drink.findById(req.query.id)
                res.status(200).json({ success: true, data: drinks })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const drinks = await Drink.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: drinks })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const drinks = await Drink.deleteOne({_id:req.query.id});
                res.status(200).json({ success: true, data: drinks })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
