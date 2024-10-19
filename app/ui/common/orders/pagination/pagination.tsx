import React from 'react';
import styles from './pagination.module.css'

// Pagination component
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToNextPage: () => void;
    goToPrevPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, goToNextPage, goToPrevPage }) => {
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