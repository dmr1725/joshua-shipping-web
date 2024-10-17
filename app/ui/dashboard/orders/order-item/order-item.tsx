import React from 'react';
import styles from './order-item.module.css'
import { OrderInterface } from '@/app/lib/data'

export const OrderItem: React.FC<OrderInterface> = ({id, bl, container_no, date, lots}) => {
    return (
        <div className={styles['order-container']}>
            <div className={styles['order-details']}>
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
            
            <div className={styles['lots-container']}>
                {lots.map((lot) => (
                    <div key={lot.id} className={styles['lot-container']}>
                        <div className={styles['lot-details']}>
                            <div className={styles['lot-font']}>Lot #{lot.id}</div>
                            <div className={styles['lot-product']}>
                                <div>{lot.product}: {lot.current_boxes}/{lot.starting_boxes}</div>
                                <img className={styles['box-icon']} src="icons/box.svg" alt="box" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}