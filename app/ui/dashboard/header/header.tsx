import React from 'react';
import styles from './header.module.css';

interface DashboardHeaderProps {
    companyName: string;
}

export const DashboardHeader : React.FC<DashboardHeaderProps> = ({companyName}) => {

    return (
        <div className={styles['header-container']}>
            <div>{companyName}</div>
        </div>
    );
};