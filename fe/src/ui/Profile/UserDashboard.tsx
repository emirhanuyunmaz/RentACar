import UserDashboardTable from "../components/UserDashboardTable/UserDashboardTable";
import UserLeftBar from "../components/UserLeftBar/UserLeftBar";


export default function UserDashboard(){
    return(<div className="relative">
        <div className=" fixed z-10">
            <UserLeftBar/>
        </div>

        <div className="ml-20 md:mx-32 min-h-[70vh] max-w-7xl mx-auto">
            <UserDashboardTable/>
        </div>
    </div>)
}