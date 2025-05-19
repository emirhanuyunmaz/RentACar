import { AndroidFilled, AppleFilled,  CarOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router";


export default function Footer(){
    return(<div className="flex flex-col max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-3">
            <div className="flex items-center gap-3 mx-auto">
                <CarOutlined style={{fontSize:40}} />
                <p className="font-bold">Car Rental</p>
            </div>

            <div className="flex gap-3 mx-auto">
                <p className="px-3 py-1 flex justify-center items-center bg-primary rounded-full text-white ">
                    <EnvironmentOutlined style={{fontSize:24}} />
                </p>
                <div>
                    <p className="font-bold ">Address</p>
                    <p>Kahramanmaraş , Onikişubat</p>
                </div>
            </div>

            <div className="flex gap-3 mx-auto">
                <p className="px-3 py-1 flex justify-center items-center bg-primary rounded-full text-white ">
                    <MailOutlined style={{fontSize:24}} />
                </p>
                <div>
                    <p className="font-bold ">Email</p>
                    <p>emirhanuyunmaz46@gmail.com</p>
                </div>
            </div>

            <div className="flex gap-3 mx-auto">
                <p className="px-3 py-1 flex justify-center items-center bg-primary rounded-full text-white ">
                    <PhoneOutlined style={{fontSize:24}} />
                </p>
                <div>
                    <p className="font-bold ">Phone</p>
                    <p>+90 555 555 55 55</p>
                </div>
            </div>
        </div>

        {/* ROW - 2 - START */}
        <div className="grid grid-cols-1 md:grid-cols-4 ">

            <div className="text-center">
                <p>
                    Easy and fast car rental service with affordable prices, wide vehicle options, and reliable support for all your travel needs.
                </p>
            </div>
            
            <div className="text-center">
                <p className="font-bold">Useful Links</p>
                <ul>
                    <li>
                        <Link to={`/about`} >About Us</Link>
                    </li>
                    <li>
                        <Link to={`/contact`} >Contact Us</Link>
                    </li>
                    <li>
                        <Link to={`/gallery`} >Gallery</Link>
                    </li>
                </ul>
            </div>
            
            <div className="text-center">
                <p className="font-bold">Vehicles</p>
                <ul>
                    <li>
                        <Link to={`/vehicles/sedan`} >Sedan</Link>
                    </li>
                    <li>
                        <Link to={`/vehicles/capriolet`} >Capriolet</Link>
                    </li>
                    <li>
                        <Link to={`/vehicles/pickup`} >Pickup</Link>
                    </li>
                    <li>
                        <Link to={`/vehicles/minivan`} >Minivan</Link>
                    </li>
                    <li>
                        <Link to={`/vehicles/suv`} >SUV</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col text-center mx-auto gap-3 mt-3">
                <h5 className="font-bold text-xl">Download App</h5>
                <div className="flex items-center bg-black text-white p-1 rounded-xl gap-1 ">
                    <div>
                        <AppleFilled  style={{fontSize:32}} />

                    </div>
                    <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-lg" >App Store</p>
                    </div>
                </div>
                
                <div className="flex items-center bg-black text-white p-1 rounded-xl gap-1">
                    <div>
                        <AndroidFilled   style={{fontSize:32}} />

                    </div>
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-lg" >Google Play</p>
                    </div>
                </div>
            </div>

        </div>

    </div>)
}