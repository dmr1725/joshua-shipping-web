import ContainersReceipt from "@/app/ui/client/containers-receipt";
import { OrdersSkeleton } from "@/app/ui/common/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<OrdersSkeleton />}>
        <ContainersReceipt />
      </Suspense>
    </>
  );
}
