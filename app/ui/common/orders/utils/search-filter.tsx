import {
  ContainerReceiptInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";

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
