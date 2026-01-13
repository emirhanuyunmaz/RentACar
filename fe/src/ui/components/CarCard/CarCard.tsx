import { MergeFilled } from "@ant-design/icons";
import type { CarCard } from "../../../types/Car";
import { Link } from "react-router";

export default function CarCardDesign(car:CarCard){
    return(<div  key={car.id ? null :car.id} className="flex flex-col items-center gap-3 w-72 p-2 rounded-xl bg-secondary hover:shadow-xl transition-all" >
        <div>
            <img src={`${car.images[0].link}`} alt="Car Image" className="md:w-72 w-64 rounded-xl" />
        </div>

        <div className="w-full flex justify-between" >
            <div>
                <p>{car.title}</p>
                <p>{""}</p>
            </div>

            <div>
                <p>${String(car.price)}</p>
                <p>per day</p>
            </div>
        </div>

        <div className="flex justify-around gap-2">
            <div className="flex gap-1">
                <MergeFilled />
                <p className="text-xs">{car.gearBox}</p>
            </div>

            <div className="flex gap-1">
                <img src="gasoline.png" alt="Gasoline" className="w-4" />
                <p className="text-xs">{car.fuer}</p>
            </div>
            
            <div className="flex gap-1">
                <img src="snow.png" alt="Gasoline" className="w-4" />
                <p className={`text-xs ${car.airConditioner == 1 ? "" : "line-through"}`} >Air Conditioner</p>
            </div>
        </div>
        <div className="flex w-full">
            <Link to={`/vehicle/${car.id}`}  className="text-center w-full p-1 rounded-xl text-white bg-primary hover:opacity-60 cursor-pointer transition-all">View Details</Link>
        </div>
    </div>)
}