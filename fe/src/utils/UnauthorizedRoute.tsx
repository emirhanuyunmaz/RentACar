import { jwtDecode } from "jwt-decode"
import { useEffect, type ReactNode } from "react"
import { useNavigate } from "react-router"
import { Cookies } from "typescript-cookie"


export default function UnauthorizedRoute({children}:{children:ReactNode}){
    const token = Cookies.get("token")
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            navigate("/login")
        }else{
            const verfiy_token = jwtDecode<{id:string , admin:boolean}>(token as string)
            console.log(verfiy_token);
            if(verfiy_token.admin){
                navigate("/admin")
            }else{
                navigate("/profile")
            }
        }
    },[])
    return(<>{children}</>)
}