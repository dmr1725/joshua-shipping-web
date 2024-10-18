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
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(1); // Reset to page 1 when search changes
    };

    // Filter the orders based on search input
    const filteredOrders = orders.filter(order => {
        const matchOrderId = order.id.toLowerCase().includes(searchTerm);
        const matchContainerNo = order.container_no.toLowerCase().includes(searchTerm);
        const matchBl = order.bl.toLowerCase().includes(searchTerm);

        const matchLots = order.lots.some(lot =>
            lot.id.toLowerCase().includes(searchTerm) ||
            lot.product.toLowerCase().includes(searchTerm)
        );

        return matchOrderId || matchContainerNo || matchBl || matchLots;
    });

    // Get current orders for pagination
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination logic
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

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
                    <img className={styles['search-icon']} src='/icons/search.svg' alt='search icon' />
                    <input
                        className={styles['input-search']}
                        type="text"
                        id="search_orders"
                        name="search_orders"
                        placeholder="Search your orders..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <OrderList orders={currentOrders} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage}
            />
        </div>
    );
};

// Pagination component
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToNextPage: () => void;
    goToPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, goToNextPage, goToPrevPage }) => {
    return (
        <nav className={styles['pagination-nav']}>
            <ul className={styles['pagination']}>
                <li className={`${styles['page-item']} ${currentPage === 1 ? styles['disabled'] : ''}`} onClick={goToPrevPage}>
                    Prev
                </li>
                <li className={styles['page-number']}>
                    {currentPage} of {totalPages}
                </li>
                <li className={`${styles['page-item']} ${currentPage === totalPages ? styles['disabled'] : ''}`} onClick={goToNextPage}>
                    Next
                </li>
            </ul>
        </nav>
    );
};