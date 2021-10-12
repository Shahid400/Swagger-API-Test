import { UserSchema } from "../model/user.model";
import { RegisterUserReq } from "../types/request/user.request";
export class MainUser {
    constructor() {}
    RegisterUser(RegReq:RegisterUserReq){
        return new UserSchema(RegReq).save();
    }
    DeleteUser(_id:string){
        return UserSchema.findByIdAndDelete(_id)
    }
    GetUserList(){
        return UserSchema.find()
    }
    // updateUser(updatereq:UpdateReqUser){
    //     return UserSchema.findByIdAndUpdate(updatereq._id, updatereq, {new:true})
    // }
    // loginUser(loginreq:LoginUserReq){
    //     return UserSchema.findOne({
    //         email:loginreq.email, password:loginreq.password
    //     })
    // }
}