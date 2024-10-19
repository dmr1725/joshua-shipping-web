import React, { useState, useEffect } from 'react';
import { OrderInterface } from '@/app/lib/data';
import styles from './pagination.module.css';

// Pagination component
interface PaginationProps {
    data: OrderInterface[];
    itemsPerPage: number;
    onPageChange: (currentData: OrderInterface[]) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ data, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        // Notify parent component about the current page's data
        onPageChange(currentData);
    }, [currentPage, data]);  // Trigger this effect when currentPage or data changes

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <nav className={styles['pagination-nav']}>
            <ul className={styles['pagination']}>
                <li
                    className={`${styles['page-item']} ${currentPage === 1 ? styles['disabled'] : ''}`}
                    onClick={goToPrevPage}
                >
                    Prev
                </li>
                <li className={styles['page-number']}>
                    {currentPage} of {totalPages}
                </li>
                <li
                    className={`${styles['page-item']} ${currentPage === totalPages ? styles['disabled'] : ''}`}
                    onClick={goToNextPage}
                >
                    Next
                </li>
            </ul>
        </nav>
    );
};