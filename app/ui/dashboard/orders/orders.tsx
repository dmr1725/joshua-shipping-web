'use client';
import React, { useState } from 'react';
import styles from './orders.module.css';
import { Button } from '../../button/button';
import { OrderInterface } from '@/app/lib/data';
import { OrderList } from './order-list/order-list';

interface OrdersProps {
    orders: OrderInterface[];
}

export const Orders: React.FC<OrdersProps> = ({ orders }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter the orders based on search input
    const filteredOrders = orders.filter(order => {
        const matchOrderId = order.id.toLowerCase().includes(searchTerm);
        const matchContainerNo = order.container_no.toLowerCase().includes(searchTerm);
        const matchBl = order.bl.toLowerCase().includes(searchTerm);

        // Check if any lot matches the search term (id or product name)
        const matchLots = order.lots.some(lot =>
            lot.id.toLowerCase().includes(searchTerm) ||
            lot.product.toLowerCase().includes(searchTerm)
        );

        return matchOrderId || matchContainerNo || matchBl || matchLots;
    });

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
                    <img className={styles['search-icon']} src='icons/search.svg' alt='search icon' />
                    <input
                        className={styles['input-search']}
                        type="text"
                        id="search_orders"
                        name="search_orders"
                        placeholder="Search your orders..."
                        value={searchTerm}
                        onChange={handleSearchChange} // Update the state when input changes
                    />
                </div>
            </div>
            <OrderList orders={filteredOrders} />
        </div>
    );
};