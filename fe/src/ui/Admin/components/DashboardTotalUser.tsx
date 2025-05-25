import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export default function DashboardTotalUser (){
    return(
    <div className='flex flex-col '>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3  ' >
        <Card variant="outlined">
            <Statistic
            title="Total User "
            value={11.28}
            />
        </Card>
        <Card variant="outlined">
            <Statistic
            title="User"
            value={11.28}
            
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
            />
        </Card>
        <Card variant="outlined">
            <Statistic
            title="Sales"
            value={9.3}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
            />
        </Card>
        </div>
        
    </div>
);

}