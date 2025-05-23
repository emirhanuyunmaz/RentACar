import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

 export default function Login(){
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

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <div className='flex justify-between'>
        <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
        <Form.Item label={null}>
          <Link to={`/register`} replace>
              Register
          </Link>
        </Form.Item>
    </div>
    <Form.Item<FieldType> >
        <Link to={`/resetPassword`} >
              Reset Password
          </Link>
    </Form.Item>
  </Form></div>)
}