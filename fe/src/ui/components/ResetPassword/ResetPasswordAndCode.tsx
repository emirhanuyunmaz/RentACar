import { Button, Form, Input, type FormProps } from "antd";

type FieldType = {
  email?: string;
  code?: string;
  password?: string;
  passwordConfirm?: string;

};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function ResetPasswordAndCode(){
    return (<div className="flex flex-col gap-3 ">
        <h1 className="text-4xl font-bold text-center">Reset Password</h1>
        <p className="text-sm text-center">Enter code and new Password</p>
        <Form
            name="basic"
            layout={'vertical'}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Code"
                name="code"
                rules={[{ required: true, message: 'Please input code!' }]}
            >
                <Input placeholder='Code' />
            </Form.Item>
            
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your new password!' }]}
            >
                <Input placeholder='Password' />
            </Form.Item>
            
            <Form.Item<FieldType>
                label="Password Confirm"
                name="passwordConfirm"
                rules={[{ required: true, message: 'Please input password confirm!' }]}
            >
                <Input placeholder='Passwrod Confirm' />
            </Form.Item>

            
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    SEND
                </Button>
            </Form.Item>


        </Form>
    </div>)
}