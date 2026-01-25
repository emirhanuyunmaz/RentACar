import { useEffect, useState } from 'react';
import { Button, Input, Modal, Pagination, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';
import { Link, useSearchParams } from 'react-router';
import { useGetAllCarListQuery } from '../../store/car/carStore';
import { ClearOutlined, DeleteOutlined, FileOutlined, FormOutlined, RightOutlined, SignatureOutlined } from '@ant-design/icons';

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
    render: (row) => <a href={`/vehicle/${row.id}`}><FileOutlined /></a>,
  },
  
];


export default function AdminCarList () {
  const [searchParams,setSearchParams] = useSearchParams()
  const [isCategoryModalOpen, setCategoryIsModalOpen] = useState(false);
  const [isEquipmentModalOpen, setEquipmentIsModalOpen] = useState(false);

  const [page,setPage] = useState(searchParams.get("page") ?? 1)
  const [searchText,setSearchText] = useState(searchParams.get("searchText") ?? "")
  const [searchTextSend,setSearchTextSend] = useState("")
  const getAllCarList = useGetAllCarListQuery({page:searchParams.get("page") ?? 1,searchText:searchTextSend})
  
  useEffect(() => {
    setPage(Number(searchParams.get("page") ))
    setSearchText(searchParams.get("searchText") as string)
  },[])

  function changePage(clickPage:number){
    setSearchParams(`?page=${clickPage.toString()}`)
    setPage(clickPage)
  }
  
  function searchOnClick(){
    setSearchParams(`?page=${1}&searchText=${searchText}`)
    setSearchTextSend(searchText)
    getAllCarList.refetch()
  }
  
  function searchClear(){
    setSearchParams(`?page=${1}`)
    setSearchTextSend("")
    setSearchText("")
    setPage(1)
    getAllCarList.refetch()
  }

  function showCategoryModal ()  {
    setCategoryIsModalOpen(true);
  };

  function handleOkCategory () {
    setCategoryIsModalOpen(false);
  };

  function handleCancelCategory() {
    setCategoryIsModalOpen(false);
  };

  function showEquipmentModal ()  {
    setEquipmentIsModalOpen(true);
  };

  function handleOkEquipment () {
    setEquipmentIsModalOpen(false);
  };

  function handleCancelEquipment() {
    setEquipmentIsModalOpen(false);
  };
  
  return (
    <div className="min-h-[80vh] flex gap-3">
                
                <div className="w-[15%]">
                    <LeftBar/>
                </div>

                <div className='w-[85%] px-10 overflow-y-auto flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Car List</h1>
                        <div className='flex gap-3'>

                          <Button onClick={showCategoryModal}>+Category</Button>
                          <Button onClick={showEquipmentModal}>+Equipment</Button>
                          <Button><Link to={`/admin/addCar`}>+Add Car</Link></Button>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Input value={searchText} onChange={(e) => setSearchText(e.target.value) } />
                        <Button onClick={searchOnClick} >Search</Button>
                        <Button onClick={searchClear} ><ClearOutlined /></Button>
                        
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
                       <Pagination defaultCurrent={page as number} total={(getAllCarList.data?.count ?? 0 )  / 5 * 10 } onChange={(e) => changePage(e.valueOf())} />
                    </div>
                </div>
                <Modal
                  title="Category"
                  closable={{ 'aria-label': 'Custom Close Button' }}
                  open={isCategoryModalOpen}
                  onOk={handleOkCategory}
                  onCancel={handleCancelCategory}
                >
                  <div>
                    <div className='flex justify-end mb-3'>
                      <Button className='ms-auto'>+Category</Button>
                    </div>
                    <ul>
                      <li className='grid grid-cols-2'>
                        <span className='text-lg'> <span><RightOutlined /></span> Category 1</span>
                        <div className='grid grid-cols-2 gap-1'>
                          <Button><FormOutlined /></Button>
                          <Button><DeleteOutlined /></Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Modal>

                <Modal
                  title="Equipment"
                  closable={{ 'aria-label': 'Custom Close Button' }}
                  open={isEquipmentModalOpen}
                  onOk={handleOkEquipment}
                  onCancel={handleCancelEquipment}
                >
                <div>
                    <div className='flex justify-end mb-3'>
                      <Button className='ms-auto'>+Equipment</Button>
                    </div>
                    <ul>
                      <li className='grid grid-cols-2'>
                        <span className='text-lg'> <span><RightOutlined /></span> Equipment 1</span>
                        <div className='grid grid-cols-2 gap-1'>
                          <Button><FormOutlined /></Button>
                          <Button><DeleteOutlined /></Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Modal>
            </div>
    
    
  );
};

