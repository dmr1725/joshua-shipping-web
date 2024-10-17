import React from 'react';
import styles from './order-item.module.css';

export const OrderItemSkeleton = () => {
    const shimmer = `before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] 
    before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative overflow-hidden bg-gray-200`;

    return (
        <div className={`${styles['order-container']} ${shimmer}`}>
            <div className={`${styles['order-details']}`}>
                <div>
                    <div className={`${shimmer}`} style={{ width: '100px', height: '20px', marginBottom: '10px' }}></div>
                    <div className={`${shimmer}`} style={{ width: '150px', height: '20px' }}></div>
                </div>
                <div>
                    <div className={`${shimmer}`} style={{ width: '120px', height: '20px', marginBottom: '10px' }}></div>
                    <div className={`${shimmer}`} style={{ width: '180px', height: '20px' }}></div>
                </div>
                <div>
                    <div className={`${shimmer}`} style={{ width: '120px', height: '20px', marginBottom: '10px' }}></div>
                    <div className={`${shimmer}`} style={{ width: '180px', height: '20px' }}></div>
                </div>
                <div>
                    <div className={`${shimmer}`} style={{ width: '120px', height: '20px', marginBottom: '10px' }}></div>
                    <div className={`${shimmer}`} style={{ width: '80px', height: '20px' }}></div>
                </div>
            </div>

            <div className={styles['lots-container']}>
                <div className={`${styles['lot-container']} ${shimmer}`}>
                    <div className={styles['lot-details']}>
                        <div className={`${shimmer}`} style={{ width: '60px', height: '20px', marginBottom: '10px' }}></div>
                        <div className={styles['lot-product']}>
                            <div className={`${shimmer}`} style={{ width: '200px', height: '20px' }}></div>
                            <div className={`${shimmer}`} style={{ width: '30px', height: '30px' }}></div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['lot-container']} ${shimmer}`}>
                    <div className={styles['lot-details']}>
                        <div className={`${shimmer}`} style={{ width: '60px', height: '20px', marginBottom: '10px' }}></div>
                        <div className={styles['lot-product']}>
                            <div className={`${shimmer}`} style={{ width: '200px', height: '20px' }}></div>
                            <div className={`${shimmer}`} style={{ width: '30px', height: '30px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};