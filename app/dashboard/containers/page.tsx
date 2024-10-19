import InventoryOrders from "@/app/ui/client/inventory-orders";
import { OrdersSkeleton } from "@/app/ui/common/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<OrdersSkeleton/>}>
        <InventoryOrders />
      </Suspense>
    </>
  );
}
