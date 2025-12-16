import { Button, Input, Pagination, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';
import { Link, useSearchParams } from 'react-router';
import { useGetAllUserQuery } from '../../store/user/userStore';
import {  FileOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface DataType {
  id: React.Key;
  name: string;
  surname: string;
  email:string;
  gender: string;
  created_at:Date
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    fixed: 'left',
  },
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
  },
  {
    title: 'Surname',
    width: 100,
    dataIndex: 'surname',
  },
  {
    title: 'Email',
    width: 100,
    dataIndex: 'email',
  },
  {
    title: 'Gender',
    width: 100,
    dataIndex: 'gender',
  },
  {
    title: 'Create At',
    width: 100,
    dataIndex: 'created_at',
    fixed: 'left',

  },
  {
    title: 'Show Profile',
    fixed: 'right',
    width: 90,
    render: () => <a><FileOutlined /></a>,
  },
  
];



export default function AdminUserList () {
  const [searchParams,setSearchParams] = useSearchParams()
  
  const [page,setPage] = useState(searchParams.get("page") ?? 1)
  const getAllUser = useGetAllUserQuery(page)

  function changePage(clickPage:number){
    setSearchParams(`?page=${clickPage.toString()}`)
    setPage(clickPage)
  }
  
  
  return (
    <div className="min-h-[80vh] flex gap-3">
                <div className="w-[15%]">
                    <LeftBar/>
                </div>

                <div className='w-[80%] px-10 overflow-y-auto flex flex-col gap-3'>
                    <div className='flex justify-between'>
                      <h1 className='text-2xl font-bold'>User List</h1>
                        <Link to={`/admin/addUser`} className='border border-gray-300 px-3 py-1 rounded-xl hover:border-black transition-all'>
                          +Add User
                        </Link>
                        
                    </div>
                    <div className='flex gap-3'>
                        <Input/>
                        <Button>Search</Button>
                    </div>
                    <Table<DataType>
                        bordered
                        className={``}
                        columns={columns}
                        dataSource={getAllUser.data?.data}
                        scroll={{ x: 'max-content' }}
                        pagination={false}
                    />
                    <div className='flex justify-center mt-3'>
                      <Pagination defaultCurrent={1} total={getAllUser.data?.count / 5 * 10} onChange={(e) => changePage(e.valueOf())} />
                    </div>
                </div>
            </div>
    
    
  );
};

