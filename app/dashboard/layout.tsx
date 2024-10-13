import { SideBar } from "@/app/ui/dashboard/sidebar/sidebar";
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['dashboard-container']}>
        <div className={styles['sidebar']}>
            <SideBar/>
        </div>
        <div className={styles['content']}>
            <div className={styles['dashboard-header']}>
                Header
            </div>
            <div className={styles['children']}>
                {children}
            </div>
        </div>
    </div>
  );
}