import { useNavigate } from "react-router";
import { useGetCarQuery } from "../../store/car/carStore";
import CarCarousel from "../components/CarCarousel/CarCarousel";
import CarEquipment from "../components/CarEquipment/CarEquipment";
// import CarList from "../components/CarList/CarList";
import TechnicalSpecificationsCard from "../components/TechnicalSpecificationsCard/TechnicalSpecificationsCard";


export default function VehicleDetail(){
    const getCar = useGetCarQuery(window.location.pathname.replace("/vehicle/",""))
    console.log(getCar.data?.data);
    
    // const getCar = useGetCarQuery()
    return(<div className=" max-w-7xl mx-auto flex flex-col gap-3">
        <div className="mx-3 md:mx-0">
            <h2 className="text-3xl font-bold">Title</h2>
            <h3 className="flex items-center gap-1"><span className="text-3xl text-purple-700 font-bold">$52</span> <span className="text-gray-500 text-xl">/</span> <span className="text-gray-500 text-xl">day</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div>
                <CarCarousel/>
            </div>
            <div>
                <TechnicalSpecificationsCard {...getCar.data?.data}/>
                <CarEquipment {...getCar.data.data} />
            </div>
        </div>
        <div className="mt-10">
            <h3 className="text-3xl font-bold ms-3 md:ms-10 mb-10">Other Car</h3>
            {/* <CarList/> */}

        </div>
    </div>)
}