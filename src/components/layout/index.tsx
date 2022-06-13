import { Outlet } from 'react-router-dom';
import SideBar from './sideBar';
import HeadBar from './headBar';
import styles from './layout.module.less';

const LayoutElement = () => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <div className={styles.main}>
        <HeadBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutElement;