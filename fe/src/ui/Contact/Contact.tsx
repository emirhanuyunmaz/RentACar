import { Button, Form, Input, type FormProps } from "antd";

const { TextArea } = Input;


type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Contact (){
    return(<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-full hidden md:flex">
            <img src="contact_us.png" alt="Contact Image" className="w-full rounded-xl" />
        </div>

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Let's Talk</h1>
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
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                <Input placeholder='Email' />
                </Form.Item>

                <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input placeholder='Email' />
                </Form.Item>

                <Form.Item<FieldType>
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
                >
                <TextArea rows={4} className="max-h-32 " />
                </Form.Item>

                <Form.Item label={null} className="w-full">
                    <Button type="primary" htmlType="submit" className="w-full">
                        Send
                    </Button>
                </Form.Item>

            </Form>
        </div>


    </div>)
}