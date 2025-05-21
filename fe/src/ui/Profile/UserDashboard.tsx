import UserDashboardTable from "../components/UserDashboardTable/UserDashboardTable";
import UserLeftBar from "../components/UserLeftBar/UserLeftBar";


export default function UserDashboard(){
    return(<div className="relative">
        <div className="absolute">
            <UserLeftBar/>
        </div>

        <div className="min-h-[70vh] max-w-7xl mx-auto">
            <UserDashboardTable/>
        </div>
    </div>)
}