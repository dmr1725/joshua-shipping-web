import React from "react";
import styles from "./order-item.module.css";
import { OrderInterface } from "@/app/lib/data";
import { Lots } from "@/app/ui/common/lots/lots";

export const OrderItem: React.FC<OrderInterface> = ({
  id,
  bl,
  container_no,
  date,
  lots,
}) => {
  return (
    <div className={styles["order-container"]}>
      <div className={styles["order-details"]}>
        <div>
          <div>Order placed</div>
          <div>{date}</div>
        </div>
        <div>
          <div>Bill of Lading</div>
          <div>{bl}</div>
        </div>
        <div>
          <div>Container #</div>
          <div>{container_no}</div>
        </div>
        <div>
          <div>Order #{id}</div>
          <div>View order details</div>
        </div>
      </div>

      <Lots lots={lots} />
    </div>
  );
};
