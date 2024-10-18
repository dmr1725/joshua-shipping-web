import React from 'react';
import { LotInterface } from '@/app/lib/data';
import styles from './lots.module.css'

interface LotsProps {
    lots: LotInterface[];
}

export const Lots: React.FC<LotsProps> = ({lots}) => {
    return (
        <div className={styles['lots-container']}>
            {lots.map((lot) => (
                <div key={lot.id} className={styles['lot-container']}>
                    <div className={styles['lot-details']}>
                        <div className={styles['lot-font']}>Lot #{lot.id}</div>
                        <div className={styles['lot-product']}>
                            <div>{lot.product}: {lot.dispatched_boxes ? lot.dispatched_boxes : `${lot.current_boxes}/${lot.starting_boxes}`}</div>
                            <img className={styles['box-icon']} src="icons/box.svg" alt="box" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
} 