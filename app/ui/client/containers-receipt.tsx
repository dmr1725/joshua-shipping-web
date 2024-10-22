import { fetchAllContainerOrders } from "@/app/lib/data";
import { ClientOrders } from "./client-orders";

export default async function ContainersReceipt() {
  const orders = await fetchAllContainerOrders();

  return (
    <ClientOrders
      orders={orders}
      orderType="containers"
      statusOptions={["Pending", "Confirmed Inventory"]}
      dateOptions={["1 week", "3 months", "2024"]}
    />
  );
}
