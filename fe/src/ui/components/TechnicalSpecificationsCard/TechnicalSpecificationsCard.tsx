import { MergeOutlined } from "@ant-design/icons";


export default function TechnicalSpecificationsCard({gearBox,fuer,doors,airConditioner,seats,distance}:{gearBox:String,fuer:String,doors:Number,airConditioner:Number,seats:Number,distance:Number}){
    return(<div className="w-full px-3 ">
        <h2 className="text-2xl font-bold">Technical Specification</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-3">
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <MergeOutlined className="text-3xl"/>
                <p className="font-bold">Gear Box</p>
                <p>{gearBox}</p>
            </div>

            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/fueloil.png" className="w-8" alt="" />
                <p className="font-bold">Fuel</p>
                <p>{fuer}</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/cardoor.png" className="w-8" alt="" />
                <p className="font-bold">Door</p>
                <p>{String(doors)}</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/airconditioner.png" className="w-8" alt="" />
                <p className="font-bold">Air Conditioner</p>
                {airConditioner == 1 ? <p>Yes</p> : <p>No</p>}
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/seats.png" className="w-8" alt="" />
                <p className="font-bold">Seats</p>
                <p>{String(seats)}</p>
            </div>
            
            <div className="bg-card-bg flex flex-col justify-center items-start p-6 rounded-xl ">
                <img src="/distance.png" className="w-8" alt="" />
                <p className="font-bold">Distance</p>
                <p>{String(distance)}</p>
            </div>
        </div>

    </div>)
}