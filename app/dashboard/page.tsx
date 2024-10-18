import OrdersWrapper from "../ui/common/orders/wrapper";
import { OrdersSkeleton } from "../ui/common/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<OrdersSkeleton />}>
        <OrdersWrapper />
      </Suspense>
    </>
  );
}
