import { verify } from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"

const secret: any = process.env.SECRET

export default function middleware(req: NextRequest){
    const {cookies} = req
    const jwt =cookies.auth
    const url = req.url

    if(url.includes('/dashboard')){
        if(jwt==undefined){
            return NextResponse.redirect('http://localhost:3000/auth/login')
        }
        try {
           verify(jwt, secret) 
           return NextResponse.next()
        } catch (error) {
            return NextResponse.redirect('http://localhost:3000/auth/login')
        }
    }
    return NextResponse.next()
}
