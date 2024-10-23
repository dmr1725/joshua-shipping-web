import { fetchCompanyName } from "@/app/lib/data";
import { DashboardHeader } from "./header";


export default async function ClientDashboardHeader() {
    const companyName = await fetchCompanyName();

    return (
        <>
            <DashboardHeader companyName={companyName}/>
        </>
    )
}