import styles from './orders.module.css'; // Import your existing styles
import statusStyles from './status-dropdown/status-dropdown.module.css'
import { Button } from '../../button/button';
import { OrderItemSkeleton } from './order-item/skeleton';
    
export const OrdersSkeleton = () => {
    return (
        <>
            <div className={`${styles['orders-layout']}`}>
                <div className={styles['orders-header-font']}>
                    
                </div>
                <div className={styles['actions-container']}>
                <div className={styles["buttons-layout"]}>
                    <div className={statusStyles["status-dropdown-container"]}>
                        <Button className={statusStyles["status-button"]}>
                            <div>Filter By Status</div>
                            <img src="/icons/polygon.svg" alt="polygon" />
                        </Button>
                    </div>
                    <div>
                        <Button className={styles["add-order-button"]}>Orders</Button>
                    </div>
                    </div>
                    <div className={styles['search-container']}>
                        <img className={styles['search-icon']} src='/icons/search.svg' alt='search photo' />
                        <input className={styles['input-search']} type="text" id="search_orders" name="search_orders" placeholder="Search your orders..."/>
                    </div>
                </div>
                <div className="flex flex-col pt-[3rem] gap-[2rem]">
                    <OrderItemSkeleton/>
                    <OrderItemSkeleton/>
                    <OrderItemSkeleton/>
                    <OrderItemSkeleton/>
                </div>
            </div>
        </>
    );
};