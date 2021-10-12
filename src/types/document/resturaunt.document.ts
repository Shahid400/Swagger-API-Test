import { Document } from "mongoose";
export interface IResturaunt extends Document{
    _id: string,
    ResturauntName: string,
    ResturauntContact: string,
    location: coordinates,
    CreatedAt?: string,
    UpdatedAt?: string
}
export interface coordinates {
  latitude: number,
  longitude: number
}