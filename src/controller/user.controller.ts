import { IUser } from "../types/document/user.document";
import { MainUser } from "../repositories/user.repositories";
import CustomError from "../utills/error.utills";
import {Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { RegisterUserRes } from "../types/response/user.response";
import { DeleteUserReq, RegisterUserReq } from "../types/request/user.request";
@Route('User')
@Tags('User Management Routes')
export class UserController{
    constructor(){}
    /**
     * User will Register himself
     * @summary Registration by User
     * @param RegReq User Details required
     * @returns 
     */
    @Post('/RegisterUser')
    async RegisterUser(@Body() RegReq:RegisterUserReq):Promise<RegisterUserRes>{
        const RegisterUser:IUser = await new MainUser().RegisterUser(RegReq)
        return <RegisterUserRes> RegisterUser
    }
    /**
     * Admin must be login to delete User
     * @summary Admin can delete User
     * @param DelReq User id is required to delete user
     * @returns 
     */
  @Security('api_key')
  @Delete('/DeleteUser')
  @SuccessResponse("200","User Deleted!")
  async DeleteUser(@Body() DelReq: DeleteUserReq) {
    return await new MainUser().DeleteUser(DelReq.id);
  }
  /**
   * Admin must be login to check the list of Registered Users
   * @summary Admin can check Registered Users
   * @returns 
   */
  @Security('api_key')
  @Post('/GetUserList')
  async GetUserList(): Promise<RegisterUserRes[]> {
    const admin: IUser[] = await new MainUser().GetUserList();
    return <RegisterUserRes[]>(admin);
  }
}