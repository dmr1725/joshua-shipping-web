import { fetchAllDispatchedOrders } from "@/app/lib/data";
import { ClientOrders } from './client-orders'

export default async function DispatchOrders() {
    const orders = await fetchAllDispatchedOrders();

    return (
        <ClientOrders 
            orders={orders} 
            orderType="dispatches"
            statusOptions={["Pending", "Picked Up"]}
        />
    );
}