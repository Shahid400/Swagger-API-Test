import express from 'express'
import { IWeather } from '../types/document/weather.document'
import { WeatherController } from '../controller/Weather.controller'
import { AuthAdmin } from '../middleware/auth.middleware'
class WeatherRoutes {
    router: express.Router
    constructor() {
        this.router = express.Router()
        this.routes()
    }
    routes() {
        this.router.post('/GetWeather', AuthAdmin, async (req, res, next) => {
            try {
                const WeatherReq:IWeather= req.body;
                const Weather: any[] = await new WeatherController().GetWeather(WeatherReq);
                res.status(200).json({
                    result: Weather
                });

            } catch (error) {
                next(error);
            }
        });
    }

}
export const WeatherRoutesApi = new WeatherRoutes().router