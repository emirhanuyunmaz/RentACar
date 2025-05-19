import { CarOutlined, EnvironmentOutlined, WalletOutlined } from "@ant-design/icons"


export default function RentACarInfo(){
    return(<div className="w-full flex flex-col md:flex-row justify-around mt-10 gap-10 px-3">

        <div className="flex flex-col items-center">
            <EnvironmentOutlined style={{fontSize:52}} />
            <h3 className="font-bold" >Availability</h3>
            <p className="text-center">Check real-time car availability instantly, book early, avoid surprises, and drive your favorite vehicle today.</p>
        </div>

        <div className="flex flex-col items-center">
            <CarOutlined style={{fontSize:52}} />
            <h3 className="font-bold">Comfort</h3>
            <p className="text-center">Experience ultimate comfort with our clean, modern cars — spacious interiors, smooth rides, and climate control.</p>
        </div>

        <div className="flex flex-col items-center">
            <WalletOutlined style={{fontSize:52}} />
            <h3 className="font-bold">Saving</h3>
            <p className="text-center">Enjoy big savings with our affordable rates, fuel-efficient cars, exclusive deals, and no hidden fees.</p>
        </div>

    </div>)
}