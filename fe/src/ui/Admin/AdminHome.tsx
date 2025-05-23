import { Link } from "react-router";
import LeftBar from "./components/LeftBar";
import { AppstoreFilled, DatabaseFilled, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";


export default function AdminHome(){
    return(<div className="min-h-[80vh] flex gap-3">
        <div className=" md:w-64">
            <LeftBar/>
        </div>
        <div className="flex gap-3">
            
            <Link to={`/admin/profile`} className="w-40 h-40 border-1 rounded-xl border-black flex flex-col justify-center items-center font-bold hover:shadow-2xl transition-all">
                <UserOutlined/>
                <p>Profile</p>
            </Link>
            
            <Link to={`/admin/dashboard`} className="w-40 h-40 border-1 rounded-xl border-black flex flex-col justify-center items-center font-bold hover:shadow-2xl transition-all">
                <AppstoreFilled /> 
                <p>Dashboard</p>
            </Link>
            
            <Link to={`/admin/carList`} className="w-40 h-40 border-1 rounded-xl border-black flex flex-col justify-center items-center font-bold hover:shadow-2xl transition-all">
                <DatabaseFilled />
                <p>Car List</p>
            </Link>
            
            <Link to={`/admin/userList`} className="w-40 h-40 border-1 rounded-xl border-black flex flex-col justify-center items-center font-bold hover:shadow-2xl transition-all">
                <UsergroupAddOutlined />
                <p>User List</p>
            </Link>
            
        </div>
    </div>)
}