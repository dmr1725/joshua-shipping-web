import { fetchAllOrders } from "@/app/lib/data";
import { Orders } from "./orders";

export default async function OrdersWrapper() {
    const orders = await fetchAllOrders();

    return (
        <>
            <Orders orders={orders}/>
        </>
    )
}