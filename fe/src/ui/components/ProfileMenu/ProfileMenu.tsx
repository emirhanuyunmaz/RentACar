import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link, useNavigate} from 'react-router';
import { Cookies } from 'typescript-cookie';


export default function ProfileMenu () {
    const navigate = useNavigate()
    const onClickLogout = () => {
            Cookies.remove("token")
            navigate(0)
    }
    
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (<Link to={"/profile"}>User Profile</Link>),
        extra: '⌘P',
      },
      {
        key: '2',
        label: (<Link to={"/userDashboard"}>User Dashboard</Link>),
        extra: '⌘D',
      },
      {
        key: '3',
        label: (<span onClick={onClickLogout}>Logout</span>),
        extra: '⌘Q',
        // onClick : onClickLogout
      },
    ];
    
    return (<Dropdown menu={{ items }} className='hover:cursor-pointer'>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Profile
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)};
