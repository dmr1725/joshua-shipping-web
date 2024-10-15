import { fetchCompanyName } from "@/app/lib/data";
import { DashboardHeader } from "./header";

export default async function DashboardHeaderWrapper() {
    const companyName = await fetchCompanyName();
    console.log("dimelo")

    return (
        <>
            <DashboardHeader companyName={companyName}/>
        </>
    )
}