import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router';
import { useLoginUserMutation } from '../../store/user/userStore';
import { useMessageApi } from '../components/Message/MessageProvider';
import { Cookies } from 'typescript-cookie';

type FieldType = {
  email: string;
  password: string;
  remember: boolean;
};

export default function Login(){
  const {success,error} = useMessageApi()
  const navigate = useNavigate()

  const [login,resLogin] = useLoginUserMutation()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);
    await login(values).unwrap()
    .then((res) => {
      console.log("REMEMBEERÇÇÇ:::",values.remember);
      // console.log("RES",res);
      Cookies.set("token",res.token as string)
      success("Login Succes")
      navigate(0)
      
    })
    .catch((Err) => {      
      error(Err.data.message)
    })

  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (<div className='flex w-full h-[90vh] justify-center items-center '>
    <Form
    name="basic"
    layout={'vertical'}
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