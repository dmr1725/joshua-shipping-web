import DispatchOrders from "@/app/ui/client/dispatch-orders";
import { OrdersSkeleton } from "@/app/ui/common/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<OrdersSkeleton/>}>
        <DispatchOrders />
      </Suspense>
    </>
  );
}
