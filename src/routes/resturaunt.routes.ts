import express from 'express'
import { DeleteResturauntReq, GetResturauntReq, RegisterResturauntReq } from '../types/request/resturaunt.request'
import { RegisterResturauntRes } from '../types/response/resturaunt.response'
import { ResturauntController } from '../controller/resturaunt.controller'
import Jwt from 'jsonwebtoken'
import { AuthAdmin } from '../middleware/auth.middleware'
class ResturauntRoutes{
    router: express.Router
    constructor(){
        this.router = express.Router()
        this.routes()
    }
    routes(){
      this.router.post('/RegisterResturaunt', AuthAdmin, async(req,res,next)=>{
        try{
          const RegReq:RegisterResturauntReq= req.body
          const NewResturaunt:RegisterResturauntRes = await new ResturauntController().RegisterResturaunt(RegReq)
          res.status(200).json({
            result: NewResturaunt
          })
        }
        catch(err){
          next(err)
        }
      })
      
      this.router.delete('/DeleteResturaunt', AuthAdmin, async (req, res, next) => {
        try {
          const DelReq:DeleteResturauntReq = req.body;
          const DeleteResturaunt = await new ResturauntController().DeleteResturaunt(DelReq);
          res.status(200).json({
            message: 'Resturaunt Deleted'
          });
        } catch (error) {
          next(error);
        }
      });

      this.router.post('/GetResturaunt', async (req, res, next) => {
        try {
          const GetReq:GetResturauntReq = req.body;
            const Resturaunt:RegisterResturauntRes = await new ResturauntController().GetResturaunt(GetReq);
            res.send(Resturaunt);
        } catch (error) {
          next(error);
        }
      });
      
      this.router.post('/GetResturauntLocation', async (req, res, next) => {
        try {
              const ResturauntReq =req.body
              const AllResturant = await new ResturauntController().GetResturauntLocation(ResturauntReq);
              res.send(AllResturant)
        }catch(err){
            next(err)
        }
  })
      
    }

}
export const ResturauntRoutesApi = new ResturauntRoutes().router