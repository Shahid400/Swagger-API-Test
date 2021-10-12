import { Request,Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { AdminSchema } from "../model/admin.model";
export const AuthAdmin = async (req:Request, res:Response, next:NextFunction)=>{
    const token: any = req.header('token');
    if(!token) return res.send('unauthorized Admin!')
    const adminId:any = Jwt.verify(token, 'this is key')
    const admin = await AdminSchema.findById(adminId._id)
    if(admin){
        res.locals.id= adminId._id
        next()
    }else{
        return res.status(400).json({
            message: "Unauthorized Admin!"
        })
    }
}