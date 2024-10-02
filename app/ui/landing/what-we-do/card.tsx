import { FC } from 'react';
import styles from './what-we-do.module.css';

interface CardProps {
    id: number;
    icon: string;
    title: string;
    text: string;
    isSelected: boolean
}

export const Card: FC<CardProps> = ({id, icon, title, text, isSelected}) => {
    return (
        <div key={id} className={`${styles['card-container']} ${styles['selected-card']}`}>
            <img className={styles['icon']} src={icon}/>
            <div>
                <div className={styles['card-title']}>Pick Up and Transportation</div>
                <div className={styles['card-text']}>We begin with shipment pick-up at the port and assist with customs brokerage to ensure compliance with regulations and smooth clearance processes. Once cleared, items are transported in temperature-controlled vehicles to ensure optimal freshness.</div>
            </div>
        </div>
    )
}