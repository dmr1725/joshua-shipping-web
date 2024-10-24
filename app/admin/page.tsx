'use client';
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

export default function Page (){
    const router = useRouter();

    useEffect(() => {
        // Redirect to admin-dashboard/containers
        router.push('/admin/containers');
    }, [router]);

    return null; // No need to return anything
}