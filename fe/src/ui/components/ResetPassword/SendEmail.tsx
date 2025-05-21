import { Button, Form, Input, type FormProps } from "antd";
import { Link } from "react-router";

type FieldType = {
  email?: string;

};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function SendEmail(){
    return (<div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center">Forgot Your Password</h1>
        <p className="text-sm text-center">Enter Your Email and reset password </p>
        <Form
            name="basic"
            layout={'vertical'}
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
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

            
            <div className='flex flex-col items-center'>
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    SEND
                </Button>
                </Form.Item>
                <Form.Item label={null}>
                <Link to={`/login`} replace>
                    {`<-`} Login
                </Link>
                </Form.Item>
            </div>
        </Form>
    </div>)
}