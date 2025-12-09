import jwt from "jsonwebtoken"

import { storeAccessJWT } from "../models/session/session.model.js"
import { storeRefreshJWT } from "../models/users/users.model.js"


export const createAccessJWT = (email,_id) => {
    const accessJWT = jwt.sign({email}, process.env.JWT_ACCESS_SECRET, {
        expiresIn:"15m"
    })
    const newSession = {
        accessJWT,
        type:"accessJWT",
        userId:_id
    }
    storeAccessJWT(newSession)
    return accessJWT
}
export const createRefreshJWT= (email, _id) => {
    const token = jwt.sign({email}, process.env.JWT_REFRESH_SECRET,{
        expiresIn :"1d"
    })
    storeRefreshJWT(_id, token)
}