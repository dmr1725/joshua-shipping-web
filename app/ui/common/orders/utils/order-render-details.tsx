import React from "react";
import {
  ContainerReceiptInterface,
  DispatchOrderInterface,
} from "@/app/lib/data";
import styles from "@/app/ui/common/orders/orders.module.css"; // Ensure the correct path to styles

// Function to render details for container receipt
export const renderContainerReceiptDetails = (
  order: ContainerReceiptInterface,
  orderLink: string
): JSX.Element => (
  <>
    <div>
      <div>Receipt placed</div>
      <div>{order.date.toLocaleDateString('en-US', { timeZone: 'UTC' })}</div>
    </div>
    <div>
      <div>Bill of Lading</div>
      <div>{order.bl || 'N/A'}</div>
    </div>
    <div>
      <div>Container #</div>
      <div>{order.container_no || 'N/A'}</div>
    </div>
    <div>
      <div>Receipt #{order.id}</div>
      <a href={orderLink} className={styles["order-link"]}>
        View receipt details
      </a>
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
      <div>Pick up date</div>
      <div>{order.pickup_date?.toLocaleDateString('en-US', { timeZone: 'UTC' })}</div>
    </div>
    <div>
      <div>Carrier</div>
      <div>{order.delivery_company}</div>
    </div>
    <div>
      <div>Driver</div>
      <div>{order.driver}</div>
    </div>
    <div>
      <div>Dispatch #{order.id}</div>
      <a href={orderLink} className={styles["order-link"]}>
        View dispatch details
      </a>
    </div>
  </>
);
