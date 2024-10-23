import AdminSidebar from "../ui/admin/admin-sidebar";
import DashboardLayout from "../dashboard-layout";

export default function Layout({ children } : { children: React.ReactNode}){
    return (
      <DashboardLayout sidebar={<AdminSidebar/>}>
          {children}
      </DashboardLayout>
    );
}