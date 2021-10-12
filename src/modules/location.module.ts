import { GetNearResturauntReq } from '../types/request/resturaunt.request';
import { getDistance } from 'geolib';
import { IResturaunt } from '../types/document/Iresturaunt.doc';
export const nearby = function (body: GetNearResturauntReq, Resturaunt: any) {
    const resturant: any [] = []
    Resturaunt.map((element: IResturaunt) => {
         const distance = getDistance({ latitude: element.location.latitude, longitude: element.location.longitude},
            { latitude: body.location.latitude, longitude: body.location.longitude}) 
            if (distance < body.radius) {
                const nearResturant = {
                    Name: element.ResturauntName,
                    Distance: distance
                }
                resturant.push(nearResturant)
            }
    })
    return resturant
}