import { Button, Form, Input, Select, type FormProps } from "antd";
import UserLeftBar from "../components/UserLeftBar/UserLeftBar";
import { useGetProfileQuery, useUpdateUserMutation } from "../../store/user/userStore";
import { useEffect } from "react";

type FieldType = {
  name?:string,
  surname?:string,
  email?: string;
  password?: string;
  gender?: string;
};


export default function Profile(){
    const {data,isSuccess} = useGetProfileQuery("")
    const [form] = Form.useForm()
    const [updateUser,setUpdateUser] = useUpdateUserMutation()
    
    const onFinish: FormProps<FieldType>['onFinish'] = async(values) => {
        await updateUser(values).unwrap()
        .then((res) => {
            console.log("SUCCES:",res);
            
        }).catch((err) => {
            console.log("ERR:",err);
            
        })
        
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    useEffect(() => {
        if(isSuccess){
            form.setFieldsValue(data)
            console.log("ASDDSA:",data);
        }
    },[isSuccess,data])

    

    return(<div className="relative">
    <div className=" fixed">
        <UserLeftBar/>
    </div>

    <div className="ml-20 md:ml-32 max-w-7xl mx-auto">
        
        <div className="flex justify-center items-center h-14 bg-linear-to-r from-cyan-500 to-blue-500 my-5 rounded-xl">
            <p className="text-white">Hello User</p>
        </div>  

        <div className="w-full">
            <Form
                form={form}
                name="basic"
                layout={'vertical'}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Name' />
                    </Form.Item>

                    <Form.Item<FieldType>
                    label="Surname"
                    name="surname"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Surname' />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                </div>
                


                <Form.Item<FieldType>
                    label="Gender"
                    name="gender"
                    className="md:w-1/2 pe-3"
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
                
            
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
                
            </Form>
        </div>

    </div>
</div>)
}