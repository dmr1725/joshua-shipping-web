import React from 'react';
import { OrderItem } from "../order-item/order-item";
import { OrderInterface } from '@/app/lib/data';
import styles from './order-list.module.css'

interface OrdersProps {
    orders: OrderInterface[]; // Use OrderInterface instead of OrderProps
}

export const OrderList: React.FC<OrdersProps> = ({orders}) => {
    return (
        <div className={styles['orders-container']}>
            {orders.map((order) => (
                    <OrderItem 
                        key={order.id} // Ensure each order has a unique key
                        id={order.id} 
                        bl={order.bl}
                        container_no={order.container_no}
                        date={order.date} 
                        lots={order.lots}
                    />
            ))}
        </div>
    )
}