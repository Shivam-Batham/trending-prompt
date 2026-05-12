export interface IauthMeResponse { 
    user:{
        _id:string,
        role:"user" | "admin"
    },
    success:boolean,
    message?:string
}