import { Button, Form, Input, Select, type FormProps } from "antd";
import {  useNavigate, useSearchParams } from "react-router";
import { useAdminGetUserQuery, useAdminUpdateUserMutation } from "../../store/user/userStore";
import { useEffect } from "react";
import { useMessageApi } from "../components/Message/MessageProvider";

type FieldType = {
  name?:string,
  surname?:string,
  email?: string;
  password?: string;
  gender?: string;
};

export default function AdminUpdateUser(){
    const {success,error} = useMessageApi()
    
    const navigate = useNavigate()
    const [searchParams,setSearchParams] = useSearchParams()
    const adminGetUser = useAdminGetUserQuery(searchParams.get("id"))
    const [adminUpdateUser,resAdminUpdateUser] = useAdminUpdateUserMutation()
    const [form] = Form.useForm<FieldType>();

    
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const body = {
            id:searchParams.get("id"),
            ...values
        }
        adminUpdateUser(body).unwrap()
        .then((res) => {            
            success("Update Success")
            // navigate(-1)
        }).catch((err) => {            
            error("Update Error")
        })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    useEffect(() => {
        if(adminGetUser.isSuccess){
            const u = {
                name:adminGetUser.data?.data.name,
                surname:adminGetUser.data?.data.surname,
                email:adminGetUser.data?.data.email,
                password:adminGetUser.data?.data.password,
                gender:adminGetUser.data?.data.gender
            }
            form.setFields([
                { name: ["name"], value: u.name ?? "" },
                { name: ["surname"], value: u.surname ?? "" },
                { name: ["email"], value: u.email ?? "" },
                { name: ["password"], value: u.password ?? "" },
                { name: ["gender"], value: u.gender ?? undefined },
            ]);
        }
    },[adminGetUser.isSuccess,form])
    
    return(<div className="min-h-[80vh] flex flex-col gap-20 justify-center items-center">
        <h2 className="text-center text-2xl font-bold ">Update User</h2>
        <Form
            name="basic"
            layout={'vertical'}
            form={form}
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ width:"50vh" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
        >
            <div className=" grid grid-cols-2 gap-3">
                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                <Input placeholder='Name'/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Surname"
                    name="surname"
                    rules={[{ required: true, message: 'Please input your surname!' }]}
                    >
                <Input placeholder='Surname' />
                </Form.Item>
            </div>

            <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input placeholder='Email' />
            </Form.Item>

            <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Gender is required!' }]}
                >
                <Select
                    defaultValue="Gender"
                    // style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        ]}
                />
            </Form.Item>
            
            <div className='flex justify-between'>
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
                </Form.Item>
                <Form.Item label={null}>
                <Button type="primary" style={{backgroundColor : "red" }} className="hover:opacity-75">
                    <span >Delete</span>
                </Button>
                </Form.Item>
                
                <Form.Item label={null}>
                <Button onClick={() => navigate(-1)} >
                    Back
                </Button>
                </Form.Item>
            </div>
        </Form>
    </div>)
}