import { IResturaunt } from "../types/document/Iresturaunt.doc";
import { MainResturaunt } from "../repositories/resturaunt.repositories";
import {Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { NearResturauntRes, RegisterResturauntRes } from "../types/response/resturaunt.response";
import { DeleteResturauntReq, GetNearResturauntReq, GetResturauntReq, RegisterResturauntReq } from "../types/request/resturaunt.request";
import CustomError from "../utills/error.utills";
import { nearby } from "../modules/location.module";
@Route('Resturaunt')
@Tags('Resturaunt')
export class ResturauntController{
    constructor(){}
    @Security('api_key')
    @Post('/RegisterResturaunt')
    async RegisterResturaunt(@Body() RegReq:RegisterResturauntReq):Promise<RegisterResturauntRes>{
        const RegisterResturaunt:IResturaunt = await new MainResturaunt().RegisterResturaunt(RegReq)
        return <RegisterResturauntRes> RegisterResturaunt
    }
  @Security('api_key')
  @Delete('/DeleteResturaunt')
  @SuccessResponse("200","Resturaunt Deleted!")
  async DeleteResturaunt(@Body() DelReq: DeleteResturauntReq) {
    return await new MainResturaunt().DeleteResturaunt(DelReq.id);
  }
  @Post('/GetResturaunt')
    async GetResturaunt(@Body() GetReq:GetResturauntReq): Promise<RegisterResturauntRes>{
        const Resturaunt: IResturaunt =<any> await new MainResturaunt().GetResturaunt(GetReq.id);
    if (Resturaunt === null) throw new CustomError(404, 'Resturaunt not found');
    return <RegisterResturauntRes>Resturaunt;
    }

    @Post("/GetResturauntLocation")
    async GetResturauntLocation(@Body() body: GetNearResturauntReq): Promise<NearResturauntRes[]> {
        const Resturant: any = await new MainResturaunt().GetResturauntLocation()
        const ResturatLocation: NearResturauntRes[] = nearby(body,Resturant)
        console.log(ResturatLocation)
        return ResturatLocation;
    }
    
}