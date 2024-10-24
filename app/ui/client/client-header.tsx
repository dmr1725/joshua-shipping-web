import { fetchCompanyName } from "@/app/lib/data";
import { DashboardHeader } from "../common/header/header";


export default async function ClientDashboardHeader() {
    const companyName = await fetchCompanyName();

    return (
        <>
            <DashboardHeader companyName={companyName}/>
        </>
    )
}