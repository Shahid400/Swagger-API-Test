import { Document } from "mongoose";
export interface IUser extends Document{
    _id: string,
    UserName: string,
    UserEmail: string,
    UserPassword: string,
    UserContact: string,
    CreatedAt?: string,
    UpdatedAt?: string
}