import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../utils/cloudinary";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {img} = req.body
    
    cloudinary.uploader.upload(img, {
        upload_preset: 'test',

    })


    res.json({message: 'data recived'})
}