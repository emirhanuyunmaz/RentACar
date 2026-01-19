import type { CarCard } from "../../../types/Car";
import CarCardDesign from "../CarCard/CarCard";


export default function CarList({cars}:{cars:CarCard[]}){
    console.log("cars",cars );
    
    return(<div className="">
        <div className="flex flex-wrap gap-6 justify-center">
            {
                cars != undefined && cars.length > 0 && cars.map((car) => <CarCardDesign {...car}/>)
            }
        </div>

    </div>)
}