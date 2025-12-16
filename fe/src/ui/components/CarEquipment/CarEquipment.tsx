import { CheckCircleTwoTone } from "@ant-design/icons";


export default function CarEquipment(){
    return (<div className="mt-3 flex flex-col gap-3 justify-center mx-3">
        <h2 className="text-2xl font-bold ">Car Equipment</h2>
        <ul className="grid grid-cols-2">
            <li className="flex gap-3" ><CheckCircleTwoTone />ABS</li>
            <li className="flex gap-3" ><CheckCircleTwoTone />Airbag</li>
            <li className="flex gap-3" ><CheckCircleTwoTone />Cruise Control</li>
        </ul>
    </div>)
}