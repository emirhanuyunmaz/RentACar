import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Pagination, Table } from 'antd';
import type { FormProps, TableColumnsType } from 'antd';
import LeftBar from './components/LeftBar';
import { Link, useSearchParams } from 'react-router';
import {
  useAddEquipmentMutation,
  useCarEquipmentListQuery,
  useCategoryListQuery,
  useDeleteCategoryMutation,
  useDeleteEquipmentMutation,
  useGetAllCarListQuery,
  useUpdateEquipmentMutation,
} from '../../store/car/carStore';
import {
  ClearOutlined,
  DeleteOutlined,
  FileOutlined,
  FormOutlined,
  RightOutlined,
  SignatureOutlined,
} from '@ant-design/icons';

interface DataType {
  id: string;
  title: string;
  price: number;
  distance: number;
  created_at: Date;
}

interface CategoryType {
  name: string;
}
interface EquipmentType {
  id:number | undefined,
  value: string;
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
    render: (row) => (
      <a href={`/admin/updateCar?id=${row.id}`}>
        <SignatureOutlined />
      </a>
    ),
  },
  {
    title: 'Show',
    fixed: 'right',
    width: 90,
    render: (row) => (
      <a href={`/vehicle/${row.id}`}>
        <FileOutlined />
      </a>
    ),
  },
];

export default function AdminCarList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCategoryModalOpen, setCategoryIsModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setAddCategoryIsModalOpen] = useState(false);
  const [isUpdateCategoryModalOpen, setUpdateCategoryIsModalOpen] = useState(false);
  const [isEquipmentModalOpen, setEquipmentIsModalOpen] = useState(false);
  const [isAddEquipmentModalOpen, setAddEquipmentIsModalOpen] = useState(false);
  const [isUpdateEquipmentModalOpen, setUpdateEquipmentIsModalOpen] = useState(false);
  const [page, setPage] = useState(searchParams.get('page') ?? 1);
  const [searchTextSend, setSearchTextSend] = useState('');
  const [searchText, setSearchText] = useState(
    searchParams.get('searchText') ?? ''
  );
  const [selectedEquipment,setSelectedEquipment] = useState<EquipmentType>()

  const getAllCarList = useGetAllCarListQuery({
    page: searchParams.get('page') ?? 1,
    searchText: searchTextSend,
  });
  const categoryList = useCategoryListQuery('');
  const equipmentList = useCarEquipmentListQuery('');
  const [addEquipment, resAddEquipment] = useAddEquipmentMutation();
  const [deleteEquipment,resDeleteEquipment] = useDeleteEquipmentMutation()
  const[deleteCategory,resDeleteCategory] = useDeleteCategoryMutation()
  const [updateEquipment,resUpdateEquipment] = useUpdateEquipmentMutation()

  useEffect(() => {
    setPage(Number(searchParams.get('page')));
    setSearchText(searchParams.get('searchText') as string);
  }, []);

  function changePage(clickPage: number) {
    setSearchParams(`?page=${clickPage.toString()}`);
    setPage(clickPage);
  }

  function searchOnClick() {
    setSearchParams(`?page=${1}&searchText=${searchText}`);
    setSearchTextSend(searchText);
    getAllCarList.refetch();
  }

  function searchClear() {
    setSearchParams(`?page=${1}`);
    setSearchTextSend('');
    setSearchText('');
    setPage(1);
    getAllCarList.refetch();
  }
  /**************CATEGORY****************/ 
  function showCategoryModal() {
    setCategoryIsModalOpen(true);
  }

  function handleCancelCategory() {
    setCategoryIsModalOpen(false);
  }
  function showAddCategoryModal() {
    setAddCategoryIsModalOpen(true);
  }

  function handleOkAddCategory() {
    setAddCategoryIsModalOpen(false);
  }

  function handleCancelAddCategory() {
    setAddCategoryIsModalOpen(false);
  }

  function deleteCategoryOnClick(id:number){
    deleteCategory({id:id}).unwrap()
    .then((res) => {
      categoryList.refetch()
    }).catch((err) => {
      console.log("ERR:",err);
    })
  }
  /*****************EQUIPMENT****************/
  function showAddEquipmentModal() {
    setAddEquipmentIsModalOpen(true);
  }

  function handleOkAddEquipment() {
    setAddEquipmentIsModalOpen(false);
  }

  function handleCancelAddEquipment() {
    setAddEquipmentIsModalOpen(false);
  }

  function showEquipmentModal() {
    setEquipmentIsModalOpen(true);
  }

  function handleCancelEquipment() {
    setEquipmentIsModalOpen(false);
  }

  function deleteEquipmentOnClick(id:number){
    deleteEquipment({id}).unwrap()
    .then((res) =>  {
      equipmentList.refetch()
    })
    .catch((err) => {
      console.log(err);
    })
  }
  function handleCancelUpdateEquipment(){
    setUpdateEquipmentIsModalOpen(false)
  }
  function showUpdateEquipment(id:number,value:string){
    console.log(id,value);
    setSelectedEquipment({id:id,value:value})
    setUpdateEquipmentIsModalOpen(true)
  } 

  /*****************CATEGORY FORM*****************/
  const onFinishCategory: FormProps<CategoryType>['onFinish'] = async (
    values
  ) => {
    console.log('Success:', values);
  };

  const onFinishFailedCategory: FormProps<CategoryType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  
  const onFinishCategoryUpdate: FormProps<CategoryType>['onFinish'] = async (
    values
  ) => {
    console.log('Success:', values);
  };

  const onFinishFailedCategoryUpdate: FormProps<CategoryType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  /*****************EQUIPMENT FORM*******************/
  const onFinishEquipment: FormProps<EquipmentType>['onFinish'] = async (
    values
  ) => {
    
    addEquipment(values).unwrap()
    .then((res) => {
      equipmentList.refetch()
      setAddEquipmentIsModalOpen(false)
    }).catch((err) => {
      console.log("ERR:",err);
      
    })
    
  };

  const onFinishFailedEquipment: FormProps<EquipmentType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  const onFinishEquipmentUpdate: FormProps<EquipmentType>['onFinish'] = async (
    values
  ) => {
    
    updateEquipment({id:selectedEquipment!.id,name:values.value}).unwrap()
    .then((res) => {
      equipmentList.refetch()
      setUpdateEquipmentIsModalOpen(false)
    }).catch((err) => {
      console.log("ERR:",err);
      
    })
    
  };

  const onFinishFailedEquipmentUpdate: FormProps<EquipmentType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className="min-h-[80vh] flex gap-3">
      <div className="w-[15%]">
        <LeftBar />
      </div>

      <div className="w-[85%] px-10 overflow-y-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Car List</h1>
          <div className="flex gap-3">
            <Button onClick={showCategoryModal}>+Category</Button>
            <Button onClick={showEquipmentModal}>+Equipment</Button>
            <Button>
              <Link to={`/admin/addCar`}>+Add Car</Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-3">
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button onClick={searchOnClick}>Search</Button>
          <Button onClick={searchClear}>
            <ClearOutlined />
          </Button>
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
        <div className="flex justify-center mt-3">
          <Pagination
            defaultCurrent={page as number}
            total={((getAllCarList.data?.count ?? 0) / 5) * 10}
            onChange={(e) => changePage(e.valueOf())}
          />
        </div>
      </div>

      {/* LIST - CATEGORY AND EQUIPMENT */}
      <Modal
        title="Category"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isCategoryModalOpen}
        onCancel={handleCancelCategory}
        footer={[]}
      >
        <div>
          <div className="flex justify-end mb-3">
            <Button onClick={showAddCategoryModal} className="ms-auto">
              +Category
            </Button>
          </div>
          <ul className="h-[50vh] flex flex-col gap-3 overflow-y-auto">
            {categoryList.data?.data.map((category: any) => (
              <li key={category.id} className="grid grid-cols-2">
                <span className="text-lg">
                  {' '}
                  <span>
                    <RightOutlined />
                  </span>{' '}
                  {category.name}
                </span>
                <div className="grid grid-cols-2 gap-1">
                  <Button>
                    <FormOutlined />
                  </Button>
                  <Button onClick={() => deleteCategoryOnClick(category.id)}>
                    <DeleteOutlined />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Modal>

      <Modal
        title="Equipment"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isEquipmentModalOpen}
        onCancel={handleCancelEquipment}
        footer={[]}
      >
        <div className=" ">
          <div className="flex justify-end mb-3">
            <Button onClick={showAddEquipmentModal} className="ms-auto">Add Equipment</Button>
          </div>
          <ul className="h-[50vh] flex flex-col gap-3 overflow-y-auto">
            {equipmentList.data?.data.map((equipment: EquipmentType) => (
              <li key={equipment.id} className="grid grid-cols-2">
                <span className="text-lg">
                  {' '}
                  <span>
                    <RightOutlined />
                  </span>{' '}
                  {equipment.value}
                </span>
                <div className="grid grid-cols-2 gap-1">
                  <Button onClick={() => showUpdateEquipment(equipment.id!!,equipment.value)}>
                    <FormOutlined />
                  </Button>
                  <Button onClick={() => deleteEquipmentOnClick(equipment.id!!)}>
                    <DeleteOutlined />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      {/*************************** ADD - CATEGORY AND EQUIPMENT ****************************/}
      <Modal
        title="Add Category"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isAddCategoryModalOpen}
        onOk={handleOkAddCategory}
        onCancel={handleCancelAddCategory}
        footer={[]}
      >
        <div>
          <Form
            name="basic"
            layout={'vertical'}
            style={{ width: '50vh' }}
            initialValues={{ remember: true }}
            onFinish={onFinishCategory}
            onFinishFailed={onFinishFailedCategory}
            autoComplete="off"
          >
            <Form.Item<CategoryType>
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please input category name!' },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <div className="flex justify-between">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        title="Add Equipment"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isAddEquipmentModalOpen}
        onOk={handleOkAddEquipment}
        onCancel={handleCancelAddEquipment}
        footer={[]}
      >
        <div>
          <Form
            name="basic"
            layout={'vertical'}
            style={{ width: '50vh' }}
            initialValues={{ remember: true }}
            onFinish={onFinishEquipment}
            onFinishFailed={onFinishFailedEquipment}
            autoComplete="off"
          >
            <Form.Item<EquipmentType>
              label="Name"
              name="value"
              rules={[
                { required: true, message: 'Please input equipment name!' },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <div className="flex justify-between">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>

      {/********************* UPDATE - EQUIPMENT AND CATEGORY **************************/}
      
      <Modal
        title="Update Category"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isUpdateCategoryModalOpen}
        footer={[]}
      >
        <div>
          <Form
            name="basic"
            layout={'vertical'}
            style={{ width: '50vh' }}
            initialValues={{ remember: true }}
            onFinish={onFinishCategoryUpdate}
            onFinishFailed={onFinishFailedCategoryUpdate}
            autoComplete="off"
          >
            <Form.Item<CategoryType>
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please input category name!' },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <div className="flex justify-between">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        title="Update Equipment"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isUpdateEquipmentModalOpen}
        onCancel={handleCancelUpdateEquipment}
        footer={[]}
      >
        <div>
          <Form
            key={selectedEquipment?.id}
            name="basic"
            layout={'vertical'}
            style={{ width: '50vh' }}
            initialValues={{value:selectedEquipment?.value, remember: true }}
            onFinish={onFinishEquipmentUpdate}
            onFinishFailed={onFinishFailedEquipmentUpdate}
            autoComplete="off"
          >
            <Form.Item<EquipmentType>
              label="Name"
              name="value"
              rules={[
                { required: true, message: 'Please input equipment name!' },
              ]}
            >
              <Input placeholder="Name"/>
            </Form.Item>
              {/* <p>{selectedEquipment?.value}</p> */}
            <div className="flex justify-between">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
