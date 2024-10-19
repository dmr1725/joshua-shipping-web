import React from 'react';
import { OrderItem } from "../order-item/order-item";
import { OrderInterface } from '@/app/lib/data';
import styles from './order-list.module.css'

interface OrdersProps {
    orders: OrderInterface[];
    renderDetails: (order: OrderInterface, orderLink: string) => JSX.Element;  // Pass renderDetails
    orderType: string;
}

export const OrderList: React.FC<OrdersProps> = ({ orders, renderDetails, orderType }) => {
    return (
        <div className={styles['orders-container']}>
            {orders.map((order) => {
                const orderLink = `/dashboard/${orderType}/${order.id}`; // Generate order link (adjust for dispatch if needed)

                return (
                    <OrderItem 
                        key={order.id}
                        order={order}
                        renderDetails={renderDetails}  // Pass renderDetails prop
                        orderLink={orderLink}  // Pass the generated link
                    />
                );
            })}
        </div>
    );
};