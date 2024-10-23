import ClientSidebar from "../ui/client/client-sidebar";
import DashboardLayout from "../dashboard-layout";
import DashboardHeaderWrapper from "../ui/common/header/wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout sidebar={<ClientSidebar/>} header={<DashboardHeaderWrapper/>}>
      {children}
    </DashboardLayout>
  );
}
