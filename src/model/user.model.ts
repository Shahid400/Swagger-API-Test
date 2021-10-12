import { Schema, model } from "mongoose";
import { IUser } from "../types/document/Iuser.doc";
const IUserSchema = new Schema({
    UserName: {type:String},
    UserEmail: {type:String},
    UserPassword: {type:String},
    UserContact: {type:String}
},
{timestamps:true}
);
export const UserSchema = model <IUser> ('UserSchema', IUserSchema);