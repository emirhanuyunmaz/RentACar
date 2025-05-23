import { Pagination } from "antd";
import CarCard from "../CarCard/CarCard";


export default function CarList(){
    return(<div className="">
        <div className="flex flex-wrap gap-6 justify-center">
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
        </div>
        <div className="flex justify-center my-10">
            <Pagination defaultCurrent={1} total={50} />
        </div>
    </div>)
}