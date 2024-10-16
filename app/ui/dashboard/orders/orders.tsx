import styles from './orders.module.css'
import { Button } from '../../button/button'

export const Orders = () => {
    return (
        <div className={styles['orders-layout']}>
            <div className={styles['orders-header-font']}>
                Your Orders
            </div>
            <div className={styles['filter-container']}>
                <div>
                    <Button className={styles['add-order-button']}>Add Order +</Button>
                </div>
                <div className={styles['search-container']}>
                    <img className={styles['search-icon']} src='icons/search.svg' alt='search photo' />
                    <input className={styles['input-search']} type="text" id="search_orders" name="search_orders" placeholder="Search your orders..."/>
                </div>
            </div>
            <div className={styles['orders-container']}>
                <div className={styles['order-container']}>Order 1</div>
                <div className={styles['order-container']}>Order 2</div>
            </div>
        </div>
    )
}