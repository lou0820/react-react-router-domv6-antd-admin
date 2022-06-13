import { DownOutlined } from '@ant-design/icons'
import { Menu, Dropdown, } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './headbar.module.less';


const HeadBar = () => {
  const navigate = useNavigate()



  const ChangeRouter = ({key}: { key: string }) => {
    if(key){
      navigate(key)
    }
  }
  const items = [
    {
      label: '退出登录',
      key: 'login'
    }
  ]

  return (
    <div className={styles.headBar}>
      <div className={styles.headRight}>
        <Dropdown
          overlay={
            <Menu
              items={items}
              onClick={ChangeRouter}
            />
          }
        >
          <div>张三<DownOutlined className="iconArrowDown"/></div>
        </Dropdown>
      </div>
    </div>
  )
}

export default HeadBar;