import { NextApiRequest, NextApiResponse } from "next";
import { getGoogleOAuthTokens } from "../../../../utils/getGoogleOAuthToken";
import jwt from "jsonwebtoken";
import log from "../../../../utils/logger";
import { getGoogleUser } from "../../../../utils/getGoogleUser";
import  prisma  from "./../../../../lib/prisma";

export default async function(req: NextApiRequest, res: NextApiResponse){
    //get the code from qs
    const code = req.query.code as string

    try{

    //get the id and access token from code
    const {id_token, access_token} = await getGoogleOAuthTokens({code})
    // console.log('token: ',id_token)

    //get user with tokens
    // const googleUser = jwt.decode(id_token)
    const googleUser = await getGoogleUser({id_token, access_token})

    // console.log({googleUser})

    if(!googleUser.verified_email){
        return res.status(403).send('google account is not verified')
    }

    //upsert the user 
    const user = {
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
        
    }
    const createUser = await prisma.user.create({data: user})

    console.log(createUser)
    //create a session

    //create access and refresh token

    //set cookies

    //redirect back to client 
    }catch(error: any){
            log.error(error, 'failed to authorize google user')
            console.log(error)
            return res.redirect('/oauth/error')
    }
}