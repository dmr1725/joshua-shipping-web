// Orders.tsx
"use client";
import React, { useState } from "react";
import styles from "@/app/ui/common/orders/orders.module.css";
import { Button } from "@/app/ui/button/button";
import {
  OrderInterface,
  ContainerReceiptInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";
import { getFilteredOrders } from "@/app/ui/common/orders/utils/order-filters"; // Import the new function
import {
  renderContainerReceiptDetails,
  renderDispatchOrderDetails,
} from "@/app/ui/common/orders/utils/order-render-details";
import { OrderList } from "@/app/ui/common/orders/order-list/order-list";
import { Pagination } from "@/app/ui/common/pagination/pagination";
import { FilterByDropdown } from "../common/filter-by-dropdown/filter-by-dropdown";

interface OrdersProps {
  orders: OrderInterface[];
  orderType: "containers" | "dispatches"; // New prop to specify the type of order
  statusOptions: string[];
  dateOptions: string[];
}

export const ClientOrders: React.FC<OrdersProps> = ({
  orders,
  orderType,
  statusOptions,
  dateOptions
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentOrders, setCurrentOrders] = useState<OrderInterface[]>([]); // State to track current orders displayed per page
  const [selectedStatus, setSelectedStatus] = useState<string>(''); // State for selected status
  const [selectedDate, setSelectedDate] = useState<string>(''); // State for selected date
  const ordersPerPage = 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status); // Set the selected status
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date); // Set the selected date
  };

  const filteredOrders = getFilteredOrders(
    orders,
    orderType,
    searchTerm,
    selectedStatus,
    selectedDate
  );

  const renderDetails =
    orderType === "containers"
      ? (order: OrderInterface, orderLink: string) =>
          renderContainerReceiptDetails(
            order as ContainerReceiptInterface,
            orderLink
          )
      : (order: OrderInterface, orderLink: string) =>
          renderDispatchOrderDetails(
            order as DispatchOrderInterface,
            orderLink
          );

  return (
    <div className={styles["orders-layout"]}>
      <div className="flex flex-col gap-[1rem] lg:flex-row lg:justify-between">
        <div className={styles["orders-header-font"]}>{`${
          orderType == "containers" ? "Containers" : "Dispatches"
        }`}</div>
        <div>
          <Button className={styles["add-order-button"]}>{`${
            orderType == "containers" ? "Add Container +" : "Add Dispatch +"
          }`}</Button>
        </div>
      </div>
      <div className={styles["actions-container"]}>
        <div className={styles["buttons-layout"]}>
          <FilterByDropdown
            filterType="Date"
            selectedFilter={selectedDate}
            onFilterSelect={handleDateSelect}
            filterOptions={dateOptions}
          />
          <FilterByDropdown
            filterType="Status"
            selectedFilter={selectedStatus}
            onFilterSelect={handleStatusSelect}
            filterOptions={statusOptions}
          />
        </div>
        <div className={styles["search-container"]}>
          <img
            className={styles["search-icon"]}
            src="/icons/search.svg"
            alt="search icon"
          />
          <input
            className={styles["input-search"]}
            type="text"
            id="search_orders"
            name="search_orders"
            placeholder="Search your orders..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <OrderList
        orders={currentOrders} // Only pass the current orders being displayed
        renderDetails={renderDetails} // Pass renderDetails function
        orderType={orderType}
        rootRoute="dashboard"
      />
      <Pagination
        data={filteredOrders} // Pass filtered orders
        itemsPerPage={ordersPerPage} // Pass the number of orders per page
        onPageChange={setCurrentOrders} // Set the current orders to be displayed
      />
    </div>
  );
};