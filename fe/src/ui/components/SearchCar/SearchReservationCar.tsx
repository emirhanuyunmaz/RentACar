import { Button, DatePicker, Form, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import type { Dayjs } from 'dayjs';
const { RangePicker } = DatePicker;


export default function SearchReservationCar()  {
    const [form] = Form.useForm();
    
    // const handleChange = (value: string) => {
        //     console.log(`selected ${value}`);
        // };
    
  const dateTimeOnChange = (
    date: [Dayjs | null, Dayjs | null] | null,
    dateString: [string, string]
  ): void => {
    console.log(date);
    console.log(dateString);
  };
  return (
    <Form
      layout={"vertical"}
      form={form}
      style={{backgroundColor:"white",height:"100%" ,width:"100%",padding:10,borderRadius:10}}
    >
        <Form.Item>
            <Title level={2} style={{textAlign:"center"}} >Book Your Car</Title>
        </Form.Item>
      <Form.Item label="Car Type">
        <Select
            defaultValue="Car Type"
            // onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
            ]}
        />
      </Form.Item>
        <Form.Item label="Place of Rental">
        <Select
            defaultValue="Place of Rental"
            // onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
            ]}
        />
      </Form.Item>
        <Form.Item label="Place of Return">
        <Select
            defaultValue="Place of Return"
            // onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
            ]}
        />
      </Form.Item>

        <Form.Item label="Rental Date">
            <RangePicker className='w-full' onChange={dateTimeOnChange} />
        </Form.Item>
        
      <Form.Item >
        <Button  type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

