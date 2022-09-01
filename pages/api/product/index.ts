import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const products = await prisma.product.findMany()
    res.json(products)
    // res.json({helo: 'hello'})
}