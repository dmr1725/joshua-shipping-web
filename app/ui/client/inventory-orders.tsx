import { fetchAllOrders } from "@/app/lib/data";
import { Orders } from "@/app/ui/common/orders/orders";

export default async function InventoryOrders() {
    const orders = await fetchAllOrders();

    return (
        <>
            <Orders orders={orders}/>
        </>
    )
}