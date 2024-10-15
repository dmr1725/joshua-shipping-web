import { SideBar } from "@/app/ui/dashboard/sidebar/sidebar";
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['dashboard-layout']}>
        <div className={styles['sidebar-layout']}>
            <SideBar/>
        </div>
        <div className={styles['content-layout']}>
            <div className={styles['header-layout']}>
                Header
            </div>
            <div className={styles['children-layout']}>
                {children}
            </div>
        </div>
    </div>
  );
}