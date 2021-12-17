import dbConnect from '../../../lib/dbConnect'
import Store from '../../../models/Store'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const store = await Store.findById(req.query.id)
                res.status(200).json({ success: true, data: store })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const store = await Store.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: store })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const store = await Store.findOneAndRemove(req.query.id);
                res.status(200).json({ success: true, data: store })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
