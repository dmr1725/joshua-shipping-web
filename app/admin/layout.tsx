import AdminSidebar from "../ui/admin/admin-sidebar";
import DashboardLayout from "../dashboard-layout";
import AdminDashboardHeader from "../ui/admin/admin-header";

export default function Layout({ children } : { children: React.ReactNode}){
    return (
      <DashboardLayout sidebar={<AdminSidebar/>} header={<AdminDashboardHeader/>}>
          {children}
      </DashboardLayout>
    );
}