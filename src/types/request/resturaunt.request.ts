import { coordinates } from "../document/Iresturaunt.doc";

export interface RegisterResturauntReq{
    ResturauntName: string,
    ResturauntContact: string,
    location: coordinates,
}
export interface DeleteResturauntReq {
    id: string
}
export interface GetResturauntReq {
    id: string
}
export interface GetNearResturauntReq{
    location: coordinates
    radius:number
}