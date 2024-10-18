import { SideBar } from "@/app/ui/common/sidebar/sidebar";

const clientOptions = [
    { label: 'Orders', icon: '/icons/container2.svg', link: '/dashboard/orders' },
    { label: 'Invoices', icon: '/icons/invoice.svg', link: '/dashboard/invoices' },
    { label: 'Dispatches', icon: '/icons/truck2.svg', link: '/dashboard/dispatches' }
];

export default function ClientSidebar() {
    return (
        <>
            <SideBar options={clientOptions} />
        </>
    );
}