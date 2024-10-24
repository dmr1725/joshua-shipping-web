import React from 'react';
import { LotInterface } from '@/app/lib/data';
import styles from './lots.module.css'

interface LotsProps {
    lots: LotInterface[];
}

export const Lots: React.FC<LotsProps> = ({ lots }) => {
    return (
        <div className={styles['lots-container']}>
            {lots.length === 0 ? (
                <div className={styles['no-lots-message']}>Lots will be assigned in 2-3 business days.</div>
            ) : (
                lots.map((lot) => (
                    <div key={lot.id} className={styles['lot-details']}>
                        <span className={styles['lot-number']}>Lot #{lot.id}</span>
                        <span className={styles['lot-product']}>{lot.product}</span>
                        <span className={styles['lot-packaging']}>{lot.packaging}</span>
                        <span className={styles['lot-boxes']}>
                            {lot.dispatched_boxes ? lot.dispatched_boxes : `${lot.current_boxes}/${lot.starting_boxes}`}
                            <img className={styles['box-icon']} src="/icons/box.svg" alt="box" />
                        </span>
                    </div>
                ))
            )}
        </div>
    );
};