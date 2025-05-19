import { MergeFilled } from "@ant-design/icons";

export default function CarCard(){
    return(<div className="flex flex-col items-center gap-3 w-72 p-2 rounded-xl bg-secondary hover:shadow-xl transition-all" >
        <div>
            <img src="https://cdn.pixabay.com/photo/2021/06/23/22/02/bmw-6359790_1280.jpg" alt="Car Image" className="md:w-72 w-64 rounded-xl" />
        </div>

        <div className="w-full flex justify-between" >
            <div>
                <p>BMW</p>
                <p>Sedan</p>
            </div>

            <div>
                <p>$20</p>
                <p>per day</p>
            </div>
        </div>

        <div className="flex justify-around gap-2">
            <div className="flex gap-1">
                <MergeFilled />
                <p className="text-xs">Automat</p>
            </div>

            <div className="flex gap-1">
                <img src="gasoline.png" alt="Gasoline" className="w-4" />
                <p className="text-xs">PB 95</p>
            </div>
            
            <div className="flex gap-1">
                <img src="snow.png" alt="Gasoline" className="w-4" />
                <p className="text-xs">Air Conditioner</p>
            </div>
        </div>
        <div className="w-full">
            <button className="w-full p-1 rounded-xl text-white bg-primary hover:opacity-60 cursor-pointer transition-all">View Details</button>
        </div>
    </div>)
}