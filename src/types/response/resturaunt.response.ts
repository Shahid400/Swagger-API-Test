import { coordinates } from "../document/Iresturaunt.doc";
export interface RegisterResturauntRes{
    _id: string,
    ResturauntName: string,
    ResturauntContact: string,
    location: coordinates,
    CreatedAt?: string,
    UpdatedAt?: string
}
export interface NearResturauntRes{
    Name:string,
    Distance: number,
    
}
