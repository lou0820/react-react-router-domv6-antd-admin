import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import menu from '@/router/menu';
import styles from './sidebar.module.less';
const { Sider } = Layout;


const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string>('');
  const { pathname } = location;

  useEffect(() => {
    let index = pathname.indexOf('/');
    let num = 0;
    while (index !== -1) {
      num++;
      index = pathname.indexOf('/', index + 1);
    }
    if (num > 1) {
      const oneKey = pathname.split('/')[1];
      setOpenKeys('/' + oneKey);
    }
    setSelectedKeys(pathname);
  }, [pathname]);

  const ChangeRouter = ({key}: { key: string; }) => {
    if(key){
      setSelectedKeys(key);
      navigate(key)
    }
  }

  return (
    <div className={styles.sideBar}>
      <Layout>
        <Sider
          trigger={null}
          collapsed={false}
          collapsedWidth="220"
        >
          <Menu
            theme="light"
            mode="inline"
            items={menu}
            selectedKeys={[selectedKeys]}
            openKeys={[openKeys]}
            onClick={ChangeRouter}
            onOpenChange={(openKeys) => {
              setOpenKeys(openKeys[1]);
            }}
          />
        </Sider>
      </Layout>
    </div>
  )
}

export default SideBar;