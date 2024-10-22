import {
  OrderInterface,
  ContainerReceiptInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";

  // Main function to filter orders
export function getFilteredOrders(
    orders: OrderInterface[],
    orderType: "containers" | "dispatches",
    searchTerm: string,
    selectedStatus: string,
    selectedDate: string
    ): OrderInterface[] {
    return orderType === "containers"
        ? filterContainersReceipt(orders, searchTerm).filter((order) => {
            const normalizedStatus =
            order.status === "Confirmed Inventory"
                ? order.status
                : "Pending";

            // Filter by status
            const statusMatch = selectedStatus ? normalizedStatus === selectedStatus : true;

            // Filter by date range
            const dateMatch = filterByDate(order.date, selectedDate);

            return statusMatch && dateMatch;
        })
        : filterDispatchOrders(orders, searchTerm).filter((order) => {
            const normalizedStatus = order.status === "Picked Up" ? order.status : "Pending";

            // Filter by status
            const statusMatch = selectedStatus ? normalizedStatus === selectedStatus : true;

            // Filter by date range
            const dateMatch = filterByDate(order.date, selectedDate);

            return statusMatch && dateMatch;
        });
}


export const filterContainersReceipt = (
  orders: ContainerReceiptInterface[],
  searchTerm: string
): ContainerReceiptInterface[] => {
  return orders.filter((order) => {
    const matchOrderId = order.id.toLowerCase().includes(searchTerm);
    const matchContainerNo = order.container_no
      ?.toLowerCase()
      .includes(searchTerm);
    const matchBl = order.bl?.toLowerCase().includes(searchTerm);
    const matchLots = order.lots.some(
      (lot) =>
        lot.id.toLowerCase().includes(searchTerm) ||
        lot.product.toLowerCase().includes(searchTerm)
    );
    return matchOrderId || matchContainerNo || matchBl || matchLots;
  });
};

export const filterDispatchOrders = (
  orders: DispatchOrderInterface[],
  searchTerm: string
): DispatchOrderInterface[] => {
  return orders.filter((order) => {
    const matchOrderId = order.id.toLowerCase().includes(searchTerm);
    const matchDriver = order.driver?.toLowerCase().includes(searchTerm);
    const matchLots = order.lots.some(
      (lot) =>
        lot.id.toLowerCase().includes(searchTerm) ||
        lot.product.toLowerCase().includes(searchTerm)
    );
    return matchOrderId || matchDriver || matchLots;
  });
};

export function filterByDate(orderDate: string | Date, selectedDate: string): boolean {
    const currentDate = new Date();
    const orderDateObj = new Date(orderDate);
  
    switch (selectedDate) {
      case "1 week": {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(currentDate.getDate() - 7);
        return orderDateObj >= oneWeekAgo && orderDateObj <= currentDate;
      }
      case "3 months": {
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
        return orderDateObj >= threeMonthsAgo && orderDateObj <= currentDate;
      }
      case "year": {
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // January 1st of the current year
        return orderDateObj >= startOfYear && orderDateObj <= currentDate;
      }
      case "2024": {
        const startOf2024 = new Date(2024, 0, 1); // January 1, 2024
        const endOf2024 = new Date(2024, 11, 31); // December 31, 2024
        return orderDateObj >= startOf2024 && orderDateObj <= endOf2024;
      }
      default:
        return true; // If no date filter is selected, return all orders
    }
  }