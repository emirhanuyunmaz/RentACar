import { Radio } from "antd";
import { useState } from "react";
import CarList from "../components/CarList/CarList";
import { useGetAllCarListShowQuery } from "../../store/car/carStore";



export default function Vehicles(){
    const [position, setPosition] = useState<'All' | 'Sedan'| 'Cabriolet'| 'Picup'| 'Suv'| 'Minivan'>('All');
    const getAllCarListShow = useGetAllCarListShowQuery("")
    console.log(getAllCarListShow.data);
    

    
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