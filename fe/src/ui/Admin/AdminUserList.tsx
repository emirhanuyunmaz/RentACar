import { Button, Input, Pagination, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';
import { Link, useSearchParams } from 'react-router';
import { useGetAllUserQuery } from '../../store/user/userStore';
import {  ClearOutlined, FileOutlined } from '@ant-design/icons';
import { useState } from 'react';
import dayjs from 'dayjs';

interface DataType {
  key:React.Key,
  id: string;
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
    render:(row) => <p>{dayjs(row).format('DD.MM.YYYY HH:mm')}</p>
  },
  {
    title: 'Show Profile',
    fixed: 'right',
    width: 90,
    render: (row) => <a href={`/admin/updateProfile?id=${row.id}`}><FileOutlined /></a>,
  },
  
];



export default function AdminUserList () {
  const [searchParams,setSearchParams] = useSearchParams()
  
  const [page,setPage] = useState(searchParams.get("page") ?? 1)
  const [searchText,setSearchText] = useState(searchParams.get("searchText") ?? "")
  const [searchTextSend,setSearchTextSend] = useState("")
  const getAllUser = useGetAllUserQuery({page:page,searchText:searchTextSend})

  function changePage(clickPage:number){
    setSearchParams(`?page=${clickPage.toString()}`)
    setPage(clickPage)
  }

  function searchButtonClick(){
    setSearchParams(`?page=${1}&searchText=${searchText}`)
    setSearchTextSend(searchText)
    setPage(1)
    getAllUser.refetch()
  }
  
  function searchClear(){
    setSearchParams(`?page=${1}`)
    setSearchTextSend("")
    setSearchText("")
    setPage(1)
    getAllUser.refetch()
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
                        <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <Button onClick={searchButtonClick} >Search</Button>
                        <Button onClick={searchClear} ><ClearOutlined /></Button>
                    </div>
                    <Table<DataType>
                        bordered
                        className={``}
                        columns={columns}
                        dataSource={getAllUser.data?.data}
                        scroll={{ x: 'max-content' }}
                        pagination={false}
                        rowKey={`id`}
                    />
                    <div className='flex justify-center mt-3'>
                      <Pagination defaultCurrent={page as number} total={(getAllUser.data?.count ?? 0) / 5 * 10} onChange={(e) => changePage(e.valueOf())} />
                    </div>
                </div>
            </div>
    
    
  );
};

