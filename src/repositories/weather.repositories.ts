const axios = require('axios');
import { IWeather } from "../types/document/weather.document";
export class MainWeather {
    constructor() {}
    async GetWeather(WeatherReq:IWeather){
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WeatherReq.key}&q=${WeatherReq.city}`);
        return response.data;
    }
}