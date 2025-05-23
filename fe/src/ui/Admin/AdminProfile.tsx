import { Input } from "antd";
import LeftBar from "./components/LeftBar";


export default function AdminProfile(){
    return(<div className="min-h-[80vh] flex gap-3">
            <div className=" md:w-64">
                <LeftBar/>
            </div>
    <div className="flex flex-col w-1/3 gap-3">
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Phone Number"/>
            <Input placeholder="Password"/>
        </div>
    </div>)
}