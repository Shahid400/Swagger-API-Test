import { IUser } from "../types/document/Iuser.doc";
import { MainUser } from "../repositories/user.repositories";
import CustomError from "../utills/error.utills";
import {Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { RegisterUserRes } from "../types/response/user.response";
import { DeleteUserReq, RegisterUserReq } from "../types/request/user.request";
@Route('User')
@Tags('User')
export class UserController{
    constructor(){}
    @Post('/RegisterUser')
    async RegisterUser(@Body() RegReq:RegisterUserReq):Promise<RegisterUserRes>{
        const RegisterUser:IUser = await new MainUser().RegisterUser(RegReq)
        return <RegisterUserRes> RegisterUser
    }
  @Security('api_key')
  @Delete('/DeleteUser')
  @SuccessResponse("200","User Deleted!")
  async DeleteUser(@Body() DelReq: DeleteUserReq) {
    return await new MainUser().DeleteUser(DelReq.id);
  }
  @Security('api_key')
  @Post('/GetUserList')
  async GetUserList(): Promise<RegisterUserRes[]> {
    const admin: IUser[] = await new MainUser().GetUserList();
    return <RegisterUserRes[]>(admin);
  }
}