import express from 'express'
import { LoginAdminReq, RegisterAdminReq } from '../types/request/admin.request'
import { RegisterAdminRes } from '../types/response/admin.response'
import { AdminController } from '../controller/admin.controller'
import Jwt from 'jsonwebtoken'
class AdminRoutes{
    router: express.Router
    constructor(){
        this.router = express.Router()
        this.routes()
    }
    routes(){
        this.router.post('/RegisterAdmin', async(req,res,next)=>{
            try{
                const RegReq:RegisterAdminReq= req.body
                const NewAdmin:RegisterAdminRes = await new AdminController().RegisterAdmin(RegReq)
                res.status(200).json({
                    result: NewAdmin
                })
            }
            catch(err){
                next(err)
            }
        })
        
        this.router.post('/LoginAdmin', async(req, res, next)=>{
            try{
                const LoginReq:LoginAdminReq = req.body;
                const AuthAdmin = await new AdminController().LoginAdmin(LoginReq)
                
                if(AuthAdmin){
                    if(LoginReq.AdminEmail==AuthAdmin.AdminEmail && LoginReq.AdminPassword==AuthAdmin.AdminPassword){
                        return res.json({
                            token:Jwt.sign({_id:AuthAdmin._id}, 'this is key')
                        })
                    }
                }else{
                    return res.status(400).json({
                        message: 'Admin not found'
                    })
                }
            }catch(err){
                next(err)
            }

            return res.status(400).json({
                message: 'Admin not found'
            })
        } )
    }

}
export const AdminRoutesApi = new AdminRoutes().router