'use client'
import { fetchCompanyName } from "@/app/lib/data";
import { DashboardHeader } from "./header";
import { usePathname } from "next/navigation";

export default async function DashboardHeaderWrapper() {
    const pathname = usePathname();

    const companyName = pathname.includes("/admin") ? "Joshua Shipping" : await fetchCompanyName();

    return (
        <>
            <DashboardHeader companyName={companyName}/>
        </>
    )
}