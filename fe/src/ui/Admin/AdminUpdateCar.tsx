import type { FormProps, SelectProps, UploadFile } from 'antd';
import { Button, Form, Image, Input, InputNumber, Select, Tag } from "antd";
import ImageUpload from "./components/ImageUpload";
import { SaveOutlined } from "@ant-design/icons";
import {  useEffect, useState } from 'react';
import { useAdminGetCarQuery, useCarEquipmentListQuery, useCreateCarMutation } from '../../store/car/carStore';
import { useSearchParams } from 'react-router';
// import { useDenemeCarQuery } from '../../store/car/carStore';

type TagRender = SelectProps['tagRender'];

const tagRender: TagRender = (props) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
    
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};

type FieldType = {
    id:string | undefined,
    title:string,
    // images:[{name:string,link:string}],
    price:string,
    gearBox:string,
    airConditioner:boolean,
    fuer:string,
    doors:Number,
    seats:Number,
    distance:Number,
    carEquipment:[],
};

export default function AdminUpdateCar(){

    const [searchParams,setSearchParams] = useSearchParams()
    const getAdminCar = useAdminGetCarQuery(searchParams.get("id"))
    const [options,setOptions] = useState([])
    const [createCar,resCreateCar] = useCreateCarMutation()
    const getCarEquipmentList = useCarEquipmentListQuery("")
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [form] = Form.useForm<FieldType>();
    
    useEffect(() => {
        if(getCarEquipmentList.isSuccess){
            setOptions(getCarEquipmentList.data.data)
        }
    },[getCarEquipmentList.isSuccess])
    
    useEffect(() => {
        if(getAdminCar.isSuccess){
            console.log(getAdminCar.data?.data);
            console.log(getAdminCar.data?.data.images[0].link);
            form.setFields([
                { name: ["title"], value: getAdminCar.data?.data.title ?? "" },
                { name: ["airConditioner"], value: getAdminCar.data?.data.airConditioner ?? "" },
                { name: ["distance"], value: getAdminCar.data?.data.distance ?? "" },
                { name: ["doors"], value: getAdminCar.data?.data.doors ?? "" },
                { name: ["fuer"], value: getAdminCar.data?.data.fuer ?? "" },
                { name: ["gearBox"], value: getAdminCar.data?.data.gearBox ?? "" },
                { name: ["price"], value: getAdminCar.data?.data.price ?? "" },
                { name: ["seats"], value: getAdminCar.data?.data.seats ?? "" },
                { name: ["carEquipment"], value: getAdminCar.data?.data.equipment ?? [] },
            ]);
            
        }
    },[getAdminCar.isSuccess])

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        
        const formData = new FormData()
        fileList.map((image) => formData.append("images",image.originFileObj!) )
        formData.append("title",values.title)
        formData.append("airConditioner",String(values.airConditioner))
        values.carEquipment.map((carEq) => formData.append("carEquipment",carEq))
        formData.append("distance",values.distance.toString())
        formData.append("doors",values.doors.toString())
        formData.append("fuer",values.fuer)
        formData.append("gearBox",values.gearBox)
        formData.append("price",values.price)
        formData.append("seats",values.seats.toString())

        createCar(formData).unwrap().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log("ERR:",err);
        })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    


    return(<div className="max-w-7xl md:mx-auto min-h-[75vh]">
    <Form
      name="basic"
      layout={'vertical'}
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">

                <Button htmlType='submit' variant="dashed"  >
                <span><SaveOutlined/></span>
                    Save
                </Button>
            </div>
            <div className="mx-3">
                {
                    getAdminCar.data?.data.images.map((image:any) =>  <Image key={image.id} width={200} alt="car image" crossOrigin='anonymous'
                        src={`${image.link}`}
                    />)
                }
            </div>
            <div className="flex flex-col gap-3 mx-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    <Form.Item<FieldType>
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input car title!' }]}
                    >
                        <Input placeholder='Title' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Price"
                        name="price"
                        className='w-full'
                        rules={[{ required: true, message: 'Please input car price!' }]}
                    >
                        <InputNumber
                            className='!w-full'
                            // style={{width:""}}
                            placeholder='Price' 
                            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Gear Box"
                        name="gearBox"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Gear Box' />
                    </Form.Item>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Form.Item<FieldType>
                        label="Air Conditioner"
                        name="airConditioner"
                        rules={[{ required: true, message: 'Please input car air conditioner!' }]}
                        className='w-full'
                    >
                        <InputNumber placeholder='Air Conditioner' className='!w-full' />
                    </Form.Item>
                    
                    <Form.Item<FieldType>
                        label="Fuer"
                        name="fuer"
                        rules={[{ required: true, message: 'Please input car fuer!' }]}
                    >
                        <Input placeholder='Fuer' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Doors"
                        name="doors"
                        rules={[{ required: true, message: 'Please input car doors!' }]}
                    >
                        <InputNumber placeholder='Doors' className='!w-full' />
                    </Form.Item>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Form.Item<FieldType>
                        label="Seats"
                        name="seats"
                        rules={[{ required: true, message: 'Please input car seats!' }]}
                    >
                        <InputNumber placeholder='Seats' className='!w-full' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Distance"
                        name="distance"
                        rules={[{ required: true, message: 'Please input car distance!' }]}
                    >
                        <InputNumber placeholder='Distance' className='!w-full' />
                    </Form.Item>
                    
                    <Form.Item<FieldType>
                        label="Car Equipment"
                        name="carEquipment"
                        rules={[{ required: true, message: 'Please input car distance!' }]}
                    >
                         <Select
                            mode="multiple"
                            tagRender={tagRender}
                            placeholder="Car Equipment"
                            style={{ width: '100%' }}
                            options={options}
                        />
                    </Form.Item>

                    
                </div>
                
            </div>
        </div>
        </Form>
    </div>)
}