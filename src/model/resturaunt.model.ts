import { Schema, model } from "mongoose";
import { IResturaunt } from "../types/document/resturaunt.document";
const IResturauntSchema = new Schema({
    ResturauntName: {type:String},
    ResturauntContact: {type:String},
    location: {
        latitude: {type: Number},
        longitude: {type: Number}
    },
},
{timestamps:true}
);
export const ResturauntSchema = model <IResturaunt> ('ResturauntSchema', IResturauntSchema);