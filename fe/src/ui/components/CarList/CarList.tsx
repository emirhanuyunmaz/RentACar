import { Pagination } from "antd";
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
        <div className="flex justify-center my-10">
            <Pagination defaultCurrent={1} total={50} />
        </div>
    </div>)
}