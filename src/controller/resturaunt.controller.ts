import { IResturaunt } from "../types/document/resturaunt.document";
import { MainResturaunt } from "../repositories/resturaunt.repositories";
import {Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { NearResturauntRes, RegisterResturauntRes } from "../types/response/resturaunt.response";
import { DeleteResturauntReq, GetNearResturauntReq, GetResturauntReq, RegisterResturauntReq } from "../types/request/resturaunt.request";
import CustomError from "../utills/error.utills";
import { getDistance } from 'geolib';
@Route('Resturaunt')
@Tags('Resturaunt Management Routes')
export class ResturauntController{
    constructor(){}
    /**
     * Admin must be login to Register the Resturaunt
     * @summary Admin can Register the Resturaunt
     * @param RegReq Resturaunt details required with longitude and latitude
     * @returns 
     */
    @Security('api_key')
    @Post('/RegisterResturaunt')
    async RegisterResturaunt(@Body() RegReq:RegisterResturauntReq):Promise<RegisterResturauntRes>{
        const RegisterResturaunt:IResturaunt = await new MainResturaunt().RegisterResturaunt(RegReq)
        return <RegisterResturauntRes> RegisterResturaunt
    }
    /**
     * Admin must be login to Delete specific Resturaunt with id
     * @summary Admin can Delete any Resturaunt by entering Resturaunt id
     * @param DelReq Resturaunt id is required to delete it
     * @returns 
     */
  @Security('api_key')
  @Delete('/DeleteResturaunt')
  @SuccessResponse("200","Resturaunt Deleted!")
  async DeleteResturaunt(@Body() DelReq: DeleteResturauntReq) {
    return await new MainResturaunt().DeleteResturaunt(DelReq.id);
  }
  /**
   * User can get the details of resturaunt by entering Resturaunt's id
   * @summary User can get Resturaunt's details by Resturaunt's id
   * @param GetReq Resturaunt's id is required
   * @returns 
   */
  @Post('/GetResturaunt')
    async GetResturaunt(@Body() GetReq:GetResturauntReq): Promise<RegisterResturauntRes>{
        const Resturaunt: IResturaunt =<any> await new MainResturaunt().GetResturaunt(GetReq.id);
    if (Resturaunt === null) throw new CustomError(404, 'Resturaunt not found');
    return <RegisterResturauntRes>Resturaunt;
    }

    /**
     * User can find the nearest Resturaunts within range by entering radius, Latitude & Longitude of place of his choice
     * @summary User can find nearest Resturaunts
     * @param body Latitude & Longitude from which you want to calculate distance and radius in meters
     * @returns 
     */
    @Post("/GetResturauntLocation")
    async GetResturauntLocation(@Body() body: GetNearResturauntReq): Promise<NearResturauntRes[]> {
        const Resturaunt: any = await new MainResturaunt().GetResturauntLocation()
        const ResturauntLocation: NearResturauntRes[] = []
            Resturaunt.map((element: IResturaunt) => {
                 const distance = getDistance({ latitude: element.location.latitude, longitude: element.location.longitude},
                    { latitude: body.location.latitude, longitude: body.location.longitude}) 
                    if (distance < body.radius) {
                        const NearResturaunt = {
                            Name: element.ResturauntName,
                            Distance: distance
                        }
                        ResturauntLocation.push(NearResturaunt)
                    }
            })
        return ResturauntLocation
        }
}