"use client";
import React, { useState } from "react";
import styles from "./orders.module.css";
import { Button } from "../../button/button";
import {
  OrderInterface,
  ContainerOrderInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";
import {
  filterContainerOrders,
  filterDispatchOrders,
} from "./utils/search-filter";
import {
  renderContainerOrderDetails,
  renderDispatchOrderDetails,
} from "./utils/order-render-details";
import { OrderList } from "./order-list/order-list";
import { Pagination } from "./pagination/pagination";

interface OrdersProps {
  orders: OrderInterface[];
  orderType: "containers" | "dispatches"; // New prop to specify the type of order
}

export const Orders: React.FC<OrdersProps> = ({ orders, orderType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentOrders, setCurrentOrders] = useState<OrderInterface[]>([]); // State to track current orders displayed per page
  const ordersPerPage = 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Use appropriate filter based on orderType
  const filteredOrders =
    orderType === "containers"
      ? filterContainerOrders(orders, searchTerm)
      : filterDispatchOrders(orders, searchTerm);

  // Choose the appropriate render function based on the order type
  const renderDetails =
    orderType === "containers"
      ? (order: OrderInterface, orderLink: string) =>
          renderContainerOrderDetails(
            order as ContainerOrderInterface,
            orderLink
          )
      : (order: OrderInterface, orderLink: string) =>
          renderDispatchOrderDetails(
            order as DispatchOrderInterface,
            orderLink
          );

  return (
    <div className={styles["orders-layout"]}>
      <div className={styles["orders-header-font"]}>{`${
        orderType == "containers" ? "Containers" : "Dispatches"
      }`}</div>
      <div className={styles["actions-container"]}>
        <div>
          <Button className={styles["add-order-button"]}>{`${
            orderType == "containers" ? "Add Container +" : "Add Dispatch +"
          }`}</Button>
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
