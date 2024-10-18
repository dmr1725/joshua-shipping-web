import { SideBar } from "@/app/ui/dashboard/sidebar/sidebar";
import DashboardHeaderWrapper from "../ui/dashboard/header/wrapper";
import { DashboardHeaderSkeleton } from "../ui/dashboard/header/skeleton";
import { Suspense } from "react";
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['dashboard-layout']}>
        <div className={styles['sidebar-layout']}>
            <SideBar/>
        </div>
        <div className={styles['content-layout']}>
            <div className={styles['header-layout']}>
                <Suspense fallback={<DashboardHeaderSkeleton/>}>
                    <DashboardHeaderWrapper/>
                </Suspense>
            </div>
            <div className={styles['children-layout']}>
                {children}
            </div>
        </div>
    </div>
  );
}