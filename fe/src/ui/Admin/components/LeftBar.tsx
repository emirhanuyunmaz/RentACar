import { AppstoreFilled, BorderBottomOutlined, DatabaseFilled, HomeFilled, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";


export default function LeftBar(){
    return(<div className="min-h-[80vh] bg-primary flex flex-col gap-5 p-3">
        <h1 className="text-center text-2xl font-bold text-white">Admin Panel</h1>
        <ul className="h-full flex flex-col gap-5 px-8 text-white">
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <HomeFilled/>
                <Link to={`/admin`}>Home</Link>
            </li>
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <UserOutlined />
                <Link to={`/admin/profile`}>Profile</Link>
            </li>
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <AppstoreFilled /> 
                <Link to={`/admin/dashboard`}>Dashboard</Link>
            </li>
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <DatabaseFilled />
                <Link to={`/admin/carList`}>Car List</Link>            
            </li>
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <UsergroupAddOutlined />
                <Link to={`/admin/userList`}>User List</Link>
            </li>
            <li className={`flex gap-3 hover:opacity-40 transition-all`} >
                <BorderBottomOutlined/>
                <Link to={`/admin/footer`}>Footer Edit</Link>
            </li>
        </ul>

    </div>)
}