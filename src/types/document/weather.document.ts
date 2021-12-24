import { Document } from "mongoose";
export interface IWeather extends Document{
    key: string,
    city: string
}