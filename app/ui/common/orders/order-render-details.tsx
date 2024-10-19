import React from "react";
import Link from "next/link";
import { OrderInterface } from "@/app/lib/data";
import styles from "./orders.module.css";  // Ensure the correct path to styles

// Function to render details for Inventory Orders
export const renderInventoryOrderDetails = (order: OrderInterface, orderLink: string): JSX.Element => (
  <>
    <div>
      <div>Order placed</div>
      <div>{order.date}</div>
    </div>
    <div>
      <div>Bill of Lading</div>
      <div>{order.bl}</div>
    </div>
    <div>
      <div>Container #</div>
      <div>{order.container_no}</div>
    </div>
    <div>
      <div>Order #{order.id}</div>
      <Link href={orderLink} className={styles['order-link']}>
        View order details
      </Link>
    </div>
  </>
);

// Function to render details for Dispatch Orders
export const renderDispatchOrderDetails = (order: OrderInterface, orderLink: string): JSX.Element => (
  <>
    <div>
      <div>Dispatched Date</div>
      <div>{order.date}</div>
    </div>
    <div>
      <div>Order #{order.id}</div>
      <Link href={orderLink} className={styles['order-link']}>
        Track dispatch
      </Link>
    </div>
  </>
);