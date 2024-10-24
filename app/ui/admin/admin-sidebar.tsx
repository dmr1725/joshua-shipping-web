import { SideBar } from "@/app/ui/common/sidebar/sidebar";

const AdminOptions = [
    {label: 'Containers', icon: '/icons/container2.svg', link: '/admin/containers'},
    {label: 'Dispatches', icon: '/icons/truck2.svg', link: '/admin/dispatches'},
    {label: 'Invoices', icon: '/icons/invoice.svg', link: '/admin/invoices'}
]

export default function AdminSideBar(){
    return (
        <>
            <SideBar options={AdminOptions} />
        </>
    )
}