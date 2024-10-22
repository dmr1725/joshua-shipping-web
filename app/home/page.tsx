import InventoryOrders from "../ui/client/containers-receipt";
import { OrdersSkeleton } from "../ui/common/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<OrdersSkeleton />}>
        <InventoryOrders />
      </Suspense>
    </>
  );
}
