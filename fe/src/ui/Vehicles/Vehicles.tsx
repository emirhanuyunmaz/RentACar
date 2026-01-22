import { Radio } from "antd";
import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import { useGetAllCarListShowQuery } from "../../store/car/carStore";
import { useSearchParams } from "react-router";
import type { CarCategory } from "../../types/Car";


export default function Vehicles(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [position, setPosition] = useState<CarCategory >((searchParams.get("category") ?? "All")as CarCategory);
    
    const getAllCarListShow = useGetAllCarListShowQuery({category:position != "All" ? position : "" })
    
    useEffect(() => {
        setSearchParams({category:position})
        getAllCarListShow.refetch()
    },[position])
    
    return(<div className="max-w-7xl mx-auto flex flex-col gap-10">
    <h1 className="text-center font-bold text-4xl">Select a Vehicles Group</h1>
    <div className="flex justify-center items-center">
        <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
            <Radio.Button value="All">All</Radio.Button>
            <Radio.Button value="Sedan">Sedan</Radio.Button>
            <Radio.Button value="Cabriolet">Cabriolet</Radio.Button>
            <Radio.Button value="Picup">Picup</Radio.Button>
            <Radio.Button value="Suv">Suv</Radio.Button>
            <Radio.Button value="Minivan">Minivan</Radio.Button>
        </Radio.Group>
    </div>
    
    <div>
        <CarList cars={getAllCarListShow.data?.data} />
    </div>

    </div>)
}