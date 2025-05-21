import { Link, NavLink } from "react-router"


export default function Header(){
    return(<nav className="max-w-7xl flex justify-around mx-auto  py-6">
        <Link  to={`/`} className="flex items-center gap-1"> <img src="vite.svg" alt="Rent A car Icon" className="w-10 h-10 rounded-full" /> <p className="font-bold">Rent Car</p></Link>
        <div className="flex gap-5" >
            <NavLink className="hover:underline" to={`/`} >Home</NavLink>
            <NavLink className="hover:underline" to={`/vehicles`} >Vehicles</NavLink>
            <NavLink className="hover:underline" to={`/about`} >About Us</NavLink>
            <NavLink className="hover:underline" to={`/contact`} >Contact Us</NavLink>
        </div>
        <Link className="hover:opacity-60 transition-all" to={`/login`} >Login</Link>
    </nav>)
}