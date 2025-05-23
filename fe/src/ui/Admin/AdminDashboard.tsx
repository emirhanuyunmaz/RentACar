import React from 'react';
import { Button, Input, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1', },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },

  {
    title: 'Action 1',
    fixed: 'right',
    width: 90,
    render: () => <a>action</a>,
  },
  
  
];

const dataSource: DataType[] = [
  { key: '1', name: 'Olivia', age: 32, address: 'New York Park' },
  { key: '2', name: 'Ethan', age: 40, address: 'London Park' },
];

export default function AdminDashboard () {
  
  return (
    <div className="min-h-[80vh] flex gap-3">
                <div className="w-[15%]">
                    <LeftBar/>
                </div>
                <div className='w-[85%] px-10 overflow-y-auto flex flex-col gap-3'>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                    <div className='flex gap-3'>
                        <Input/>
                        <Button>Search</Button>
                    </div>
                    <Table<DataType>
                        bordered
                        className={``}
                        columns={columns}
                        dataSource={dataSource}
                        scroll={{ x: 'max-content' }}
                        pagination={false}
                    />
                </div>
            </div>
    
    
  );
};

