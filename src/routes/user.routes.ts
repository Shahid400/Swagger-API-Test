import express from 'express'
import { DeleteUserReq, RegisterUserReq } from '../types/request/user.request'
import { RegisterUserRes } from '../types/response/user.response'
import { UserController } from '../controller/user.controller'
import Jwt from 'jsonwebtoken'
import { AuthAdmin } from '../middleware/auth.middleware'
class UserRoutes{
    router: express.Router
    constructor(){
        this.router = express.Router()
        this.routes()
    }
    routes(){
      this.router.post('/RegisterUser', async(req,res,next)=>{
        try{
          const RegReq:RegisterUserReq= req.body
          const NewUser:RegisterUserRes = await new UserController().RegisterUser(RegReq)
          res.status(200).json({
            result: NewUser
          })
        }
        catch(err){
          next(err)
        }
      })
      
      this.router.delete('/DeleteUser', AuthAdmin, async (req, res, next) => {
        try {
          const DelReq:DeleteUserReq = req.body;
          const DeleteUser = await new UserController().DeleteUser(DelReq);
          res.status(200).json({
            message: 'User Deleted'
          });
        } catch (error) {
          next(error);
        }
      });

      this.router.post('/GetUserList', AuthAdmin, async (req, res, next) => {
        try {
          const UserList: RegisterUserRes[] = await new UserController().GetUserList();
          res.status(200).json({
            result: UserList
          });
  
        } catch (error) {
          next(error);
        }
      });
    }

}
export const UserRoutesApi = new UserRoutes().router