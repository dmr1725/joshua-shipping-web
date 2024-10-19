import React from "react";
import Link from "next/link";
import {
  ContainerOrderInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";
import styles from "@/app/ui/common/orders/orders.module.css"; // Ensure the correct path to styles

// Function to render details for Inventory Order
export const renderInventoryOrderDetails = (
  order: ContainerOrderInterface,
  orderLink: string
): JSX.Element => (
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
      <div>Inventory Order #{order.id}</div>
      <Link href={orderLink} className={styles["order-link"]}>
        View order details
      </Link>
    </div>
  </>
);

// Function to render details for Dispatch Order
export const renderDispatchOrderDetails = (
  order: DispatchOrderInterface,
  orderLink: string
): JSX.Element => (
  <>
    <div>
      <div>Dispatch Date</div>
      <div>{order.date}</div>
    </div>
    <div>
      <div>Pick up time</div>
      <div>{order.pickup_time}</div>
    </div>
    <div>
      <div>Driver</div>
      <div>{order.driver}</div>
    </div>
    <div>
      <div>Dispatch Order #{order.id}</div>
      <Link href={orderLink} className={styles["order-link"]}>
        View dispatch details
      </Link>
    </div>
  </>
);
