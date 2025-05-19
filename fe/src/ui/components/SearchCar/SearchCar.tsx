import SearchReservationCar from "./SearchReservationCar";

export default function SearchCar(){
    return (<div className="flex  max-w-7xl mx-auto bg-[url(/search.png)] bg-cover bg-center h-[85vh] md:h-[75vh] p-10 " >

        <div className="text-white  md:w-2/3 h-full hidden md:flex flex-col justify-center gap-10">
            <h2 className="text-5xl font-bold">Comfortable, Affordable, and Reliable Car Rental</h2>
            <p className="text-md w-2/3">Experience hassle-free driving with our reliable vehicles. Choose from daily or weekly rentals tailored to your comfort and budget. </p>
        </div>

        <div className="w-full flex justify-center md:w-1/3">
            <SearchReservationCar />
        </div>

    </div>)
}