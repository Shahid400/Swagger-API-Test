import { ResturauntSchema } from "../model/resturaunt.model";
import { RegisterResturauntReq } from "../types/request/Resturaunt.request";
import { getDistance } from 'geolib';
const geolib = require('geolib');

export class MainResturaunt {
    constructor() {}
    RegisterResturaunt(RegReq:RegisterResturauntReq){
        return new ResturauntSchema(RegReq).save();
    }
    DeleteResturaunt(_id:string){
        return ResturauntSchema.findByIdAndDelete(_id)
    }
    GetResturaunt(_id:string){
        return ResturauntSchema.findById(_id);
    }
    GetResturauntLocation(){
        return ResturauntSchema.find()
   }
    
}