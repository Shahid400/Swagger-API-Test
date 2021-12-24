import express from 'express'
import { AdminRoutesApi } from './admin.routes';
import { ResturauntRoutesApi } from './resturaunt.routes';
import { UserRoutesApi } from './user.routes';
import { WeatherRoutesApi } from './weather.routes';
export class MainRoutes{
    router:express.Router;
    constructor(){
        this.router=express.Router()
        this.routes()
    }
    routes(){
        this.router.use('/admin', AdminRoutesApi)
        this.router.use('/user', UserRoutesApi)
        this.router.use('/resturaunt', ResturauntRoutesApi)
        this.router.use('/weather', WeatherRoutesApi)
    }
}
export const MainApi = new MainRoutes().router;
