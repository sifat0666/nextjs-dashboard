import prisma  from "./../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import argon2 from 'argon2'

export default async function(req: NextApiRequest, res: NextApiResponse){
    const {email, password} = req.body
    // console.log(email)

    const user = await prisma.user.findUnique({where: {email : email}})

    if(user) return res.send('user alreadey exists')

    try {
      const hash = await argon2.hash(password)
      const newUser = await prisma.user.create({
        data: {
          email, password: hash
        }
      })
      res.json(newUser)
    } catch (error) {
      console.log(error)
    }
    
    
}