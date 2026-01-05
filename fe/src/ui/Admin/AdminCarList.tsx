import React, { useState } from 'react';
import { Button, Input, Pagination, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';
import { Link, useSearchParams } from 'react-router';
import { useGetAllCarListQuery } from '../../store/car/carStore';
import { FileOutlined, SignatureOutlined } from '@ant-design/icons';

interface DataType {
  id : string;
  title : string;
  price : number;
  distance:number;
  created_at:Date;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    fixed: 'left',
  },
  {
    title: 'Title',
    width: 100,
    dataIndex: 'title',
  },
  {
    title: 'Price',
    width: 100,
    dataIndex: 'price',
  },
  {
    title: 'Update',
    fixed: 'right',
    width: 90,
    render: (row) => <a href={`/admin/updateCar?id=${row.id}`}><SignatureOutlined /></a>,
  },
  {
    title: 'Show',
    fixed: 'right',
    width: 90,
    render: () => <a><FileOutlined /></a>,
  },
  
];


export default function AdminCarList () {
  const [searchParams,setSearchParams] = useSearchParams()
  
  const [page,setPage] = useState(searchParams.get("page") ?? 1)
  const getAllCarList = useGetAllCarListQuery(page)
  
  function changePage(clickPage:number){
    setSearchParams(`?page=${clickPage.toString()}`)
    setPage(clickPage)
  }
  
  return (
    <div className="min-h-[80vh] flex gap-3">
                
                <div className="w-[15%]">
                    <LeftBar/>
                </div>

                <div className='w-[85%] px-10 overflow-y-auto flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Car List</h1>
                        <Link to={`/admin/addCar`} className='border border-gray-300 px-3 py-1 rounded-xl hover:border-black transition-all' >+Add Car</Link>
                    </div>
                    <div className='flex gap-3'>
                        <Input/>
                        <Button>Search</Button>
                    </div>
                    <Table<DataType>
                        bordered
                        className={``}
                        columns={columns}
                        dataSource={getAllCarList.data?.data}
                        scroll={{ x: 'max-content' }}
                        pagination={false}
                        rowKey={`id`}
                    />
                    <div className='flex justify-center mt-3'>
                       <Pagination defaultCurrent={1} total={(getAllCarList.data?.count ?? 0 )  / 5 * 10 } onChange={(e) => changePage(e.valueOf())} />
                    </div>
                </div>
            </div>
    
    
  );
};

