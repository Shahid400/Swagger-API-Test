import { IAdmin } from "../types/document/Iadmin.doc";
import { LoginAdminReq, RegisterAdminReq } from "../types/request/admin.request";
import { RegisterAdminRes } from "../types/response/admin.response";
import { MainAdmin } from "../repositories/admin.repositories";
import { Route, Tags, Body, Post} from "tsoa";
@Route('Admin')
@Tags('Admin')
export class AdminController{
    constructor(){}
    @Post('/RegisterAdmin')
    async RegisterAdmin(@Body() RegReq:RegisterAdminReq):Promise<RegisterAdminRes>{
        const RegisterAdmin:IAdmin = await new MainAdmin().RegisterAdmin(RegReq)
        return <RegisterAdminRes> RegisterAdmin
    }
    
    @Post('/LoginAdmin')
    async LoginAdmin(@Body() LoginReq:LoginAdminReq):Promise<RegisterAdminRes>{
        const LoginAdmin:IAdmin = <any> await new MainAdmin().LoginAdmin(LoginReq)
        return <RegisterAdminRes> LoginAdmin
    }
}