import OrdersWrapper from "../ui/dashboard/orders/wrapper";
import { OrdersSkeleton } from "../ui/dashboard/orders/skeleton";
import { Suspense } from "react";

export default function Page() {
   
    return (
        <>
            <Suspense fallback={<OrdersSkeleton/>}>
                <OrdersWrapper/>
            </Suspense>
        </>
    );
  }