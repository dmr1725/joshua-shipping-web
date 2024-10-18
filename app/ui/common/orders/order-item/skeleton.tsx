import React from 'react';
import styles from './order-item.module.css';
import { shimmer } from '@/app/ui/shimmer';
import { LotsSkeleton } from '../../lots/lots-skeleton';

export const OrderItemSkeleton = () => {
    
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

            <LotsSkeleton/>
        </div>
    );
};