import React from "react";
import styles from "./order-item.module.css";
import { OrderInterface } from "@/app/lib/data";
import { Lots } from "@/app/ui/common/lots/lots";

interface OrderItemProps {
  order: OrderInterface;
  renderDetails: (order: OrderInterface, orderLink: string) => JSX.Element;
  orderLink: string;  // Add orderLink to the props
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, renderDetails, orderLink }) => {
  return (
    <div className={styles["order-container"]}>
      <div className={styles["order-details"]}>
        {renderDetails(order, orderLink)} {/* Render order details */}
      </div>
      <Lots lots={order.lots} />
    </div>
  );
};