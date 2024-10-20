import { SideBar } from "@/app/ui/common/sidebar/sidebar";

const clientOptions = [
    { label: 'Containers', icon: '/icons/container2.svg', link: '/dashboard/containers' },
    { label: 'Dispatches', icon: '/icons/truck2.svg', link: '/dashboard/dispatches' },
    { label: 'Invoices', icon: '/icons/invoice.svg', link: '/dashboard/invoices' }
];

export default function ClientSidebar() {
    return (
        <>
            <SideBar options={clientOptions} />
        </>
    );
}