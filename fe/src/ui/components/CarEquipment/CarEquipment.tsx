import { CheckCircleTwoTone } from "@ant-design/icons";
import type { CarEquipmentType } from "../../../types/Car";


export default function CarEquipment({equipment}:{equipment:CarEquipmentType[]}){
    return (<div className="mt-3 flex flex-col gap-3 justify-center mx-3">
        <h2 className="text-2xl font-bold ">Car Equipment</h2>
        <ul className="grid grid-cols-2">
            {equipment !=undefined && equipment.length > 0 && equipment.map((eq) =><li key={eq.id} className="flex gap-3" ><CheckCircleTwoTone />{eq.value}</li> )}
            
        </ul>
    </div>)
}