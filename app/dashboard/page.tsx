'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard/containers
    router.push('/dashboard/containers');
  }, [router]);

  return null;  // No need to return anything since the page redirects immediately
}