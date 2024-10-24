import ClientSidebar from "../ui/client/client-sidebar";
import DashboardLayout from "../dashboard-layout";
import ClientDashboardHeader from "../ui/client/client-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout sidebar={<ClientSidebar/>} header={<ClientDashboardHeader/>}>
      {children}
    </DashboardLayout>
  );
}
