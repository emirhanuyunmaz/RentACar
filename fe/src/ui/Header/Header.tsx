import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { Cookies } from "typescript-cookie"
import ProfileMenu from "../components/ProfileMenu/ProfileMenu"


export default function Header(){
    const token = Cookies.get("token") 
    const [isLogin , setIslogin] = useState(false)
    useEffect(() => {
        if(token){
            setIslogin(true)
        }
    },[token])


    return(<nav className="max-w-7xl flex justify-around mx-auto  py-6">
        <Link  to={`/`} className="flex items-center gap-1"> <img src="vite.svg" alt="Rent A car Icon" className="w-10 h-10 rounded-full" /> <p className="font-bold">Rent Car</p></Link>
        <div className="flex gap-5" >
            <NavLink className="hover:underline" to={`/`} >Home</NavLink>
            <NavLink className="hover:underline" to={`/vehicles`} >Vehicles</NavLink>
            <NavLink className="hover:underline" to={`/about`} >About Us</NavLink>
            <NavLink className="hover:underline" to={`/contact`} >Contact Us</NavLink>
        </div>
        {   isLogin ?
            <ProfileMenu/>
            :<Link className="hover:opacity-60 transition-all" to={`/login`} >Login</Link>
            
        }
    </nav>)
}