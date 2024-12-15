import {JWT_EXPIRE_TIME, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode=(phoneNumber,password)=>{
    const KEY=JWT_KEY
    const EXPIRE={expiresIn: JWT_EXPIRE_TIME}
    const PAYLOAD={phoneNumber:phoneNumber,password:password}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const TokenDecode=(token)=>{
    try {
        return jwt.verify(token,JWT_KEY)
    }catch (e) {
        return null
    }
}