import type { FormProps } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router';

type FieldType = {
  name?:string,
  surname?:string,
  email?: string;
  password?: string;
  passwordConfirm?: string;
  gender?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

 export default function Register(){
  return (<div className='flex w-full h-[90vh] justify-center items-center '>
    <Form
    name="basic"
    layout={'vertical'}
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    style={{ width:"50vh" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
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
      <Input placeholder='Name' />
    </Form.Item>

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
      label="Password Confirm"
      name="passwordConfirm"
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
            Submit
        </Button>
        </Form.Item>
        <Form.Item label={null}>
        <Link to={`/login`} replace>
            Login
        </Link>
        </Form.Item>
    </div>
  </Form></div>)
}