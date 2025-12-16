import { MergeOutlined } from "@ant-design/icons";


export default function TechnicalSpecificationsCard(){
    return(<div className="w-full px-3 ">
        <h2 className="text-2xl font-bold">Technical Specification</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-3">
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <MergeOutlined className="text-3xl"/>
                <p className="font-bold">Gear Box</p>
                <p>Automat</p>
            </div>

            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/fueloil.png" className="w-8" alt="" />
                <p className="font-bold">Fuel</p>
                <p>Petrol</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/cardoor.png" className="w-8" alt="" />
                <p className="font-bold">Door</p>
                <p>5</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/airconditioner.png" className="w-8" alt="" />
                <p className="font-bold">Air Conditioner</p>
                <p>Yes</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/seats.png" className="w-8" alt="" />
                <p className="font-bold">Seats</p>
                <p>5</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/distance.png" className="w-8" alt="" />
                <p className="font-bold">Distance</p>
                <p>5</p>
            </div>
        </div>

    </div>)
}