import { Button, Input, InputNumber } from "antd";
import CarEquipment from "./components/CarEquipment";
import ImageUpload from "./components/ImageUpload";
import { SaveOutlined } from "@ant-design/icons";


export default function AdminAddCar(){
    return(<div className="max-w-7xl mx-auto min-h-[75vh]">
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">

                <Button variant="dashed" >
                <span><SaveOutlined/></span>
                    Save
                </Button>
            </div>
            <div className="mx-3">
                <ImageUpload/>
            </div>
            <div className="flex flex-col gap-3 mx-3">
                <div className="flex flex-col md:flex-row gap-3">

                    <InputNumber<number>
                        
                        // defaultValue={1000}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                        placeholder="Price"
                        className="w-full!"
                    />
                    <Input placeholder="Gear Box" />

                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <Input placeholder="Fuer" />
                    <Input placeholder="Doors" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <Input placeholder="Air Conditioner" />
                    <Input placeholder="Seats" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <Input placeholder="Distance" />
                    <CarEquipment/>
                </div>
            </div>
        </div>
    </div>)
}