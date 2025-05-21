import { CarFilled, ProductFilled, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Link } from "react-router";


export default function UserLeftBar(){
    return(<div className="h-[70vh] bg-primary flex flex-col items-center px-5 py-5 rounded-r-xl">
        <ul className="flex flex-col gap-5">
            <li >
                <Tooltip placement="rightTop" title={"User Profile"}>
                    <Link to={"/profile"} className="bg-secondary p-1 rounded-full">
                        <UserOutlined style={{color:"black",fontSize:24}}  />    
                    </Link>
                </Tooltip>
            </li>
            {/* <li>
                <Tooltip placement="rightTop" title={"Latest"}>
                    <Link to={"/userLatest"} className="p-1">
                        <CarFilled style={{color:"white",fontSize:24}}  />
                    </Link>
                </Tooltip>
            </li> */}
            <li>
                <Tooltip placement="rightTop" title={"Dashboard"} >
                    <Link to={"/userDashboard"} className="p-1">
                        <ProductFilled style={{color:"white",fontSize:24}}  />
                    </Link>
                </Tooltip>
            
            </li>
        </ul>


    </div>)
}