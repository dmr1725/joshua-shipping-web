import ClientSidebar from "../ui/client/client-sidebar";
import DashboardLayout from "../dashboard-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout sidebar={<ClientSidebar/>}>
      {children}
    </DashboardLayout>
  );
}
