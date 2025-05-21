import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'How can I book a car?',
    children: <p>You can rent a car easily using our website or mobile app. Just choose a vehicle, select your dates, and complete the booking in a few simple steps. Our support team is always ready.</p>,
  },
  {
    key: '2',
    label: 'What documents are required to rent a car?',
    children: <p>You’ll need a valid driver’s license, national ID or passport, and a credit or debit card for payment. All documents must be current and presented in full at pickup time.</p>,
  },
  {
    key: '3',
    label: 'Is there an age limit for renting a car?',
    children: <p>Yes, the minimum age is 21. For luxury or special vehicles, drivers must often be 25 or older. We also recommend having at least 2 years of valid driving experience.</p>,
  },
  {
    key: '4',
    label: 'Are there any hidden fees?',
    children: <p>No, all fees are clearly shown during booking. Taxes, insurance, and standard services are included in the price. We follow a transparent pricing policy, so no hidden charges apply.</p>,
  },
  {
    key: '5',
    label: 'Can I cancel my reservation?',
    children: <p>Yes, you can cancel your booking at least 24 hours before pickup. Free cancellations and date changes can be made easily through our app. We offer a flexible rental system.</p>,
  },
];

export default function Answers ()  {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

