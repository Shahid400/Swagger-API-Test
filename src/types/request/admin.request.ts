export interface RegisterAdminReq{
    AdminName: string,
    AdminEmail: string,
    AdminPassword: string,
}
export interface LoginAdminReq{
    AdminEmail: string,
    AdminPassword: string
}