import { fetchAllDispatchedOrders } from "@/app/lib/data";
import { Orders } from "@/app/ui/common/orders/orders";

export default async function DispatchOrders() {
    const orders = await fetchAllDispatchedOrders();

    return (
        <Orders 
            orders={orders} 
            orderType="dispatches"
            statusOptions={["Pending", "Picked Up"]}
        />
    );
}