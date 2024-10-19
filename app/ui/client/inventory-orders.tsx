import { fetchAllContainerOrders } from "@/app/lib/data";
import { Orders } from "@/app/ui/common/orders/orders";

export default async function InventoryOrders() {
    const orders = await fetchAllContainerOrders();

    return (
        <Orders 
            orders={orders} 
            orderType="containers"
        />
    );
}