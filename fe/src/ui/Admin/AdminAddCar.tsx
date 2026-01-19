import type { FormProps, SelectProps, UploadFile } from 'antd';
import { Button, Form, Input, InputNumber, Select, Tag } from "antd";
import ImageUpload from "./components/ImageUpload";
import { SaveOutlined } from "@ant-design/icons";
import {  useEffect, useState } from 'react';
import { useCarEquipmentListQuery, useCreateCarMutation } from '../../store/car/carStore';
import { useNavigate } from 'react-router';

type TagRender = SelectProps['tagRender'];

// let options: SelectProps['options'] = [
    // { value: "Air Conditioning" },
    // { value: "Automatic Climate Control" },
    // { value: "Navigation System" },
    // { value: "Rear View Camera" },
    // { value: "Parking Sensor" },
    // { value: "Cruise Control" },
    // { value: "Multimedia Display" },
    // { value: "Android Auto / Apple CarPlay" },
    // { value: "Bluetooth Connectivity" },
    // { value: "USB / AUX Input" },
    // { value: "Keyless Entry" },
    // { value: "Push Button Start" },
    // { value: "4x4 Drive System" },
    // { value: "Start / Stop System" },
    // { value: "ABS (Anti-lock Braking System)" },
    // { value: "ESP (Electronic Stability Program)" },
    // { value: "Airbags" },
    // { value: "Tire Pressure Warning System" },
    // { value: "Lane Keeping Assist" },
    // { value: "Blind Spot Warning System" },
    // { value: "Child Seat" },
    // { value: "ISOFIX Mounting System" },
    // { value: "Hill Start Assist" },
    // { value: "Emergency Brake Assist" }
// ];

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
    price:string,
    gearBox:string,
    airConditioner:boolean,
    fuer:string,
    doors:Number,
    seats:Number,
    distance:Number,
    carEquipment:[],
};

export default function AdminAddCar(){

    const navigate = useNavigate()
    const [options,setOptions] = useState([])
    const [createCar,resCreateCar] = useCreateCarMutation()
    const getCarEquipmentList = useCarEquipmentListQuery("")
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if(getCarEquipmentList.isSuccess){
            console.log("DATA:",getCarEquipmentList.data.data);
            setOptions(getCarEquipmentList.data.data)
        }
    },[getCarEquipmentList.isSuccess])
    
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        
        const formData = new FormData()
        fileList.map((image) => formData.append("images",image.originFileObj!) )
        formData.append("title",values.title)
        formData.append("airConditioner",String(values.airConditioner))
        values.carEquipment.map((carEq:any) => {
            const data = {id:carEq.key,name:carEq.label}
            formData.append("carEquipment",JSON.stringify(data))
        })
        formData.append("distance",values.distance.toString())
        formData.append("doors",values.doors.toString())
        formData.append("fuer",values.fuer)
        formData.append("gearBox",values.gearBox)
        formData.append("price",values.price)
        formData.append("seats",values.seats.toString())
        
        createCar(formData).unwrap().then((res) => {
            console.log(res);
            navigate(-1)
        }).catch((err) => {
            console.log("ERR:",err);
        })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    // };



    return(<div className="max-w-7xl md:mx-auto min-h-[75vh]">
    <Form
      name="basic"
      layout={'vertical'}
    //   style={{ width:"50vh" }}
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
                <ImageUpload fileList={fileList} setFileList={setFileList} oldFileSize={0} />
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
                            labelInValue
                            tagRender={tagRender}
                            placeholder="Car Equipment"
                            style={{ width: '100%' }}
                            options={options}
                            fieldNames={{label:"value",value:"id"}}
                        />
                    </Form.Item>

                    
                </div>
                
            </div>
        </div>
        </Form>
    </div>)
}