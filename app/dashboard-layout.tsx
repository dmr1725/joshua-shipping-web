
import { DashboardHeaderSkeleton } from "./ui/common/header/skeleton";
import { Suspense } from "react";
import styles from "./dashboard-layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode; //sidebar as a prop
    header: React.ReactNode; //header as a prop
}

export default function DashboardLayout({ children, sidebar, header }: LayoutProps) {
  return (
    <div className={styles["dashboard-layout"]}>
      <div className={styles["sidebar-layout"]}>
        {sidebar}
      </div>
      <div className={styles["content-layout"]}>
        <div className={styles["header-layout"]}>
          <Suspense fallback={<DashboardHeaderSkeleton />}>
            {header}
          </Suspense>
        </div>
        <div className={styles["children-layout"]}>{children}</div>
      </div>
    </div>
  );
}