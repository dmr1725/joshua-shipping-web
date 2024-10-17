import React from 'react';
import styles from './orders.module.css'
import { Button } from '../../button/button'
import { OrderInterface } from '@/app/lib/data';
import { OrderList } from './order-list/order-list';

interface OrdersProps {
    orders: OrderInterface[]; // Use OrderInterface instead of OrderProps
}

export const Orders: React.FC<OrdersProps> = ({orders}) => {
    return (
        <div className={styles['orders-layout']}>
            <div className={styles['orders-header-font']}>
                Your Orders
            </div>
            <div className={styles['actions-container']}>
                <div>
                    <Button className={styles['add-order-button']}>Add Order +</Button>
                </div>
                <div className={styles['search-container']}>
                    <img className={styles['search-icon']} src='icons/search.svg' alt='search photo' />
                    <input className={styles['input-search']} type="text" id="search_orders" name="search_orders" placeholder="Search your orders..."/>
                </div>
            </div>
            <OrderList orders={orders}/>
        </div>
    )
}