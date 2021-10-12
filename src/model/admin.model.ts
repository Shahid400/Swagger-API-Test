import { Schema, model } from "mongoose";
import { IAdmin } from "../types/document/Iadmin.doc";
const IAdminSchema = new Schema({
    AdminName: {type: String},
    AdminEmail: {type: String},
    AdminPassword: {type: String}
},
{
    timestamps: true
})
export const AdminSchema = model<IAdmin>('AdminSchema', IAdminSchema)