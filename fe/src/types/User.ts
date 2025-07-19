
export type UserCreatePostType = {
    name:String,
    surname:String,
    email:String,
    password:String,
    gender:String
}

export type UserCreateGetType = {
    isSucces:Boolean
}

export type UserLoginPostType = {
    email:String,
    password:String,
    remember:Boolean
}

export type UserLoginGetType = {
    token:String
}

export type userProfile = {
    id:string,
    name:string,
    surname:string,
    email:string,
    password:string,
    gender:string,
    // isAdmin:Number
}