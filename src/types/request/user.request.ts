export interface RegisterUserReq{
    UserName: string,
    UserEmail: string,
    UserPassword: string,
    UserContact: string
}
export interface DeleteUserReq {
    id: string
}
export interface GetUserReq {
    id: string
}

// export interface UpdateUserReq{
//     _id:string,
//     UserName: string,
//     UserEmail: string,
//     UserPassword: string,
//     UserContact: string
// }
// export interface LoginUserReq{
//     UserEmail: string,
//     UserPassword: string
// }