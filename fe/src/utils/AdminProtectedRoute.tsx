import { jwtDecode } from "jwt-decode";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { Cookies } from "typescript-cookie";


export default function AdminProtectedRoute({children}:{children:ReactNode}){
    
    const token = Cookies.get("token")
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            console.log("Token bilgisi yok")
            navigate("/login")
        }else{
            console.log("ASDDSA::TTTO");
            
            const verfiy_token = jwtDecode<{id:string,admin:boolean}>(token as string)
            console.log(verfiy_token.admin);
            if(!verfiy_token.admin){
                navigate("/profile")
            }
        }
    },[])
    return(<>{children}</>)
}