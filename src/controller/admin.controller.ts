import { IAdmin } from "../types/document/admin.document";
import { LoginAdminReq, RegisterAdminReq } from "../types/request/admin.request";
import { RegisterAdminRes } from "../types/response/admin.response";
import { MainAdmin } from "../repositories/admin.repositories";
import { Route, Tags, Body, Post } from "tsoa";
@Route('Admin')
@Tags('Admin Management Routes')
export class AdminController {
    constructor() { }
    /**
     * Register Admin
     * @summary Admin Registration Route
     * @param RegReq Admin Details
     * @returns 
     */
    @Post('/RegisterAdmin')
    async RegisterAdmin(@Body() RegReq: RegisterAdminReq): Promise<RegisterAdminRes> {
        const RegisterAdmin: IAdmin = await new MainAdmin().RegisterAdmin(RegReq)
        return <RegisterAdminRes>RegisterAdmin
    }

    /**
     * Admin Login
     * @summary Admin must login to get access to Routes
     * @param LoginReq Admin Credentials required
     * @returns 
     */
    @Post('/LoginAdmin')
    async LoginAdmin(@Body() LoginReq: LoginAdminReq): Promise<RegisterAdminRes> {
        const LoginAdmin: IAdmin = <any>await new MainAdmin().LoginAdmin(LoginReq)
        return <RegisterAdminRes>LoginAdmin
    }
}