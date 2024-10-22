import AdminSideBar from "../ui/admin/admin-sidebar";
import DashboardHeaderWrapper from "../ui/common/header/wrapper";
import { DashboardHeaderSkeleton } from "../ui/common/header/skeleton";
import { Suspense } from "react";
import styles from "./layout.module.css";

export default function Layout({ children } : { children: React.ReactNode}){
    return (
        <div className={styles["dashboard-layout"]}>
      <div className={styles["sidebar-layout"]}>
        <AdminSideBar />
      </div>
      <div className={styles["content-layout"]}>
        <div className={styles["header-layout"]}>
          <Suspense fallback={<DashboardHeaderSkeleton />}>
            <DashboardHeaderWrapper />
          </Suspense>
        </div>
        <div className={styles["children-layout"]}>{children}</div>
      </div>
    </div>
    );
}