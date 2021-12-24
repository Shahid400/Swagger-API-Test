import { IWeather } from "../types/document/Weather.document";
import { MainWeather } from "../repositories/Weather.repositories";
import { Route, Tags, Post, Body, Security } from "tsoa";
@Route('Weather')
@Tags('Weather Routes')
export class WeatherController {
  constructor() { }
  /**
     * This Route is locked! Only Admin can check weather. Admin Login first and Authorize by login token
     * @summary Weather check by admin
     * @param RegReq values required, key and city
     * @returns 
     */
  @Security('api_key')
  @Post('/GetWeather')

  async GetWeather(@Body() WeatherReq: IWeather): Promise<any> {
    const Weather: IWeather = await new MainWeather().GetWeather(WeatherReq)
    return <any>Weather
  }
}