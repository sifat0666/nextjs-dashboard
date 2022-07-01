import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

export default async function(req:NextApiRequest, res:NextApiResponse){


    const {cookies} = req

    const jwt = cookies.auth

    if(!jwt) return res.json({message: 'invalid token'})

    console.log(jwt)



    const prisma = new PrismaClient()
    const user = await prisma.user.findMany()
    res.send(user)
}