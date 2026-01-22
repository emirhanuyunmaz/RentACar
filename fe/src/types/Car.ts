export type CarCard = {
    id:Number,
    title:String,
    price:Number,
    airConditioner:Number,
    fuer:String,
    gearBox:String,
    images:[
        {
            id:number,
            link:string,
            name:string
        }
    ]
}

export type ImageType =
{
    id:number,
    link:string,
    name:string
}

export type CarCategory='All' | 'Sedan'| 'Cabriolet'| 'Picup'| 'Suv'| 'Minivan'

export type CarEquipmentType = {id:number,value:String}