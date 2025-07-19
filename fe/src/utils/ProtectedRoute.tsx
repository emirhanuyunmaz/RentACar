import { jwtDecode } from "jwt-decode";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Cookies } from "typescript-cookie";

export default function ProtectedRoute({children}:{children:React.ReactNode}){
    const token = Cookies.get("token")
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            console.log("Token bilgisi yok")
            navigate("/login")
        }else{
            // const verfiy_token = jwtDecode(token as string)
            // console.log(verfiy_token);
        }
    },[])
    return(<>{children}</>)
}