import styles from './current-clients.module.css';

export const CurrentClients = () => {
    return (
        <div className={styles['current-clients-container']}>
            <div className={styles['header-text-container']}>
                <div className={styles['header-style']}>Current Clients</div>
                <div className={styles['text-style']}>We’ve partnered with diverse clients across industries, providing reliable logistics solutions.</div>
            </div>
            <div className={styles['logos-container']}>
                <img src='icons/current_clients/more_produce.svg' />
                <img src='icons/current_clients/smith_industries.svg' />
                <img src='icons/current_clients/nieves_food.svg' />
                <img src='icons/current_clients/dominguez_co.svg' />
            </div>
        </div>
    )
}