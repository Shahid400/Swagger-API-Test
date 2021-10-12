import { Document } from "mongoose";
export interface IAdmin extends Document{
    _id: string,
    AdminName: string,
    AdminEmail: string,
    AdminPassword: string,
    CreatedAt?: string,
    UpdatedAt?: string
}