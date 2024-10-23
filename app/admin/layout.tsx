import AdminSidebar from "../ui/admin/admin-sidebar";
import DashboardLayout from "../dashboard-layout";
import AdminDashboardHeaderWrapper from "../ui/common/header/admin-wrapper";

export default function Layout({ children } : { children: React.ReactNode}){
    return (
      <DashboardLayout sidebar={<AdminSidebar/>} header={<AdminDashboardHeaderWrapper/>}>
          {children}
      </DashboardLayout>
    );
}