import dbConnect from '../../../lib/dbConnect'
import Foods from '../../../models/Foods'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const menus = await Foods.findById(req.query.id)
                res.status(200).json({ success: true, data: menus })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const menus = await Foods.findByIdAndUpdate(req.query.id, req.body, { upsert: true });
                res.status(200).json({ success: true, data: menus })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                const menus = await Foods.deleteOne({_id:req.query.id});
                res.status(200).json({ success: true, data: menus })
                
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
