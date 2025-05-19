import { Link } from "react-router";
import HomeDescription from "../components/HomeDescription/HomeDesctription";
import RentACarInfo from "../components/RentACarInfo/RentACarInfo";
import SearchCar from "../components/SearchCar/SearchCar";
import CarList from "../components/CarList/CarList";


export default function Home(){
    return (<main className="max-w-7xl mx-auto">

        <SearchCar/>

        <RentACarInfo/>

        <HomeDescription/>

        <div className="mt-5">
            <div className="px-6">
                <h2 className="text-2xl md:text-4xl font-bold" >Choose the car that suits you</h2>
            </div>
            <div className="text-end my-3">
                <Link to={`/vehicles`} className="font-bold hover:opacity-60 " >View All {`->`}</Link>
            </div>
            <CarList/>
        </div>

    </main>)
}