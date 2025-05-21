import { CheckCircleTwoTone } from "@ant-design/icons";
import Answers from "../components/Answers/Answers";


export default function About(){
    return(<div className="min-h-[60vh] max-w-7xl mx-auto px-4 md:px-0" >
        <div className="md:mt-10">
            <h1 className="text-center text-4xl font-bold">About Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 md:mt-16">
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-2xl text-center text-primary">Where every drive feels extraordinary</h2>
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <h4 className="font text-primary font-bold">Who We Are</h4>
                    <p>We are a trusted car rental company committed to providing reliable, affordable, and convenient transportation solutions to our customers worldwide.</p>
                </div>
                
                <div>
                    <h4 className="font-bold text-primary ">Our Mission</h4>
                    <p>
                        Our mission is to make car rental easy, accessible, and stress-free by offering top-quality vehicles and exceptional customer service.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div>
                    <h4 className="font-bold text-primary ">What We Offer</h4>
                    <p>From compact cars to luxury SUVs, we offer a wide range of vehicles to suit every travel style and budget, available for short or long-term rental.</p>
                </div>
                
                <div>
                    <h4 className="font-bold text-primary ">Why Choose Us</h4>
                    <p>
                        With transparent pricing, 24/7 customer support, and a hassle-free booking process, we ensure a smooth and satisfying rental experience every time.
                    </p>
                </div>
            </div>
            
        </div>

        <div className="relative flex justify-center mb-10 mt-10 ">
            <video className="md:w-[80%] rounded-xl" controls autoPlay muted >
                <source src="about_video.mp4" type="video/mp4"/>
            </video>
        </div>

        <div className="grid grid-cols-3 ">
            <div className="flex flex-col gap-1 justify-center items-center" >
                <h4 className="text-2xl md:text-5xl font-bold text-primary">20K</h4>
                <p className="font-bold text-sm md:text-xl text-center">Happy Customers</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <h4 className="text-2xl md:text-5xl font-bold text-primary">540</h4>
                <p className="font-bold text-sm md:text-xl text-center">Count of Cars</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <h4 className="text-2xl md:text-5xl font-bold text-primary">25+</h4>
                <p className="font-bold text-sm md:text-xl text-center">Yours of Experince</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
            <div>
                <h3 className="text-2xl font-bold">Your Journey Starts Here: Reliable Car Rental with a Friendly Touch</h3>
                <div className="">
                    <div className="my-6">
                        <p className="">
                            We make the car rental process fast, safe, and comfortable with our friendly and professional team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                        <div className="flex flex-col gap-3">
                            <p >
                                <span className="me-2"><CheckCircleTwoTone /></span>
                                Our expert staff is always ready to offer vehicle options tailored to your specific travel needs.
                            </p>
                            <p  >
                                <span className="me-2"><CheckCircleTwoTone /></span>
                                All vehicles are regularly maintained and thoroughly inspected before every journey to ensure maximum safety.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p >
                                <span className="me-2"><CheckCircleTwoTone /></span>
                                We prioritize customer satisfaction with affordable prices, flexible rental periods, and an easy booking system.
                            </p>
                            <p >
                                <span className="me-2"><CheckCircleTwoTone /></span>
                                Our wide range of vehicles provides personalized solutions for both individual and corporate travel needs.
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full ">
                <img src="about_us.png" alt="About Us" className=" rounded-xl" />
            </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
            <h2 className="text-2xl md:text-5xl font-bold text-center">Top Car Rental Questions</h2>
            <Answers/>
        </div>

    </div>)
}