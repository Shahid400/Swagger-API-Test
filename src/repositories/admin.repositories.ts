import { AdminSchema } from "../model/admin.model";
import { LoginAdminReq, RegisterAdminReq} from "../types/request/admin.request";
export class MainAdmin{
    constructor(){}
    RegisterAdmin(RegReq:RegisterAdminReq){
        return new AdminSchema(RegReq).save()
    }
    LoginAdmin(LoginReq:LoginAdminReq){
        return AdminSchema.findOne({
            AdminEmail:LoginReq.AdminEmail, AdminPassword:LoginReq.AdminPassword
        })
    }
}