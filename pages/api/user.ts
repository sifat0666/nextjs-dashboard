import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'
import { verify } from "jsonwebtoken";

export default async function(req:NextApiRequest, res:NextApiResponse){


    const {cookies} = req

    const jwt = cookies.auth

    if(!jwt) return res.json({error: 'invalid token'})

    // console.log(jwt)

   try {
     const payload = verify(jwt, process.env.SECRET!)
     res.json(payload)
   } catch (error) {
    res.json({error: 'invalid token'})
   }


}