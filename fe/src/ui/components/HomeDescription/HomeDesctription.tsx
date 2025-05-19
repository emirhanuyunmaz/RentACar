


export default function HomeDescription(){
    return (<div className="w-full flex flex-col md:flex-row mt-10 ">
        
        <div className="w-full md:w-1/2">
            <img src="rent-a-car.png" className="rounded-xl h-[50vh] w-3/4 mx-auto" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 mt-10 md:mt-0 text-center md:text-start px-5 md:px-0">
            
            <div className="flex flex-col gap-2">
                <h4 className="font-bold"><span className="text-white bg-primary py-1 px-3 rounded-full">1</span> Easy Booking</h4>
                <p>
                    Book your rental car in seconds with our intuitive interface — fast, simple, and hassle-free every time.
                </p>
            </div>
            
            <div className="flex flex-col gap-2">
                <h4 className="font-bold"><span className="text-white bg-primary py-1 px-3 rounded-full">2</span> Wide Vehicle Selection</h4>
                <p>
                   Choose from economy to luxury cars, SUVs to vans — the perfect vehicle for every journey and need.
                </p>
            </div>
            
            <div className="flex flex-col gap-2">
                <h4 className="font-bold"><span className="text-white bg-primary py-1 px-3 rounded-full">3</span> 24/7 Customer Support</h4>
                <p>
                    Our expert support team is available day and night to assist you with anything, anytime, anywhere you go.

                </p>
            </div>
            
            <div className="flex flex-col gap-2">
                <h4 className="font-bold"><span className="text-white bg-primary py-1 px-3 rounded-full">4</span> Insurance & Safety</h4>
                <p>
                    Drive worry-free with full insurance options, regular vehicle inspections, and top-tier safety features guaranteed.
                </p>
            </div>
        </div>

    </div>)
}