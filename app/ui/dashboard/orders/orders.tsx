import styles from './orders.module.css'
import { Button } from '../../button/button'

export const Orders = () => {
    return (
        <div className={styles['orders-layout']}>
            <div className={styles['orders-header-font']}>
                Your Orders
            </div>
            <div className={styles['actions-container']}>
                <div>
                    <Button className={styles['add-order-button']}>Add Order +</Button>
                </div>
                <div className={styles['search-container']}>
                    <img className={styles['search-icon']} src='icons/search.svg' alt='search photo' />
                    <input className={styles['input-search']} type="text" id="search_orders" name="search_orders" placeholder="Search your orders..."/>
                </div>
            </div>
            <div className={styles['orders-container']}>
                <div className={styles['order-container']}>
                    <div className={styles['order-details']}>
                        <div>
                            <div>Order placed</div>
                            <div>October 16, 2024</div>
                        </div>
                        <div>
                            <div>Bill of Lading</div>
                            <div>CWPS4M097234</div>
                        </div>
                        <div>
                            <div>Container #</div>
                            <div>CMCU 5560770</div>
                        </div>
                        <div>
                            <div>Order # 114-4893-859</div>
                            <div>View order details</div>
                        </div>
                    </div>
                    
                    <div className={styles['lots-container']}>
                        <div className={styles['lot-container']}>
                            <div className={styles['lot-details']}>
                                <div className={styles['lot-font']}>Lot #1829</div>
                                <div className={styles['lot-product']}>
                                    <div>Frozen Pork Meats: 800/800</div>
                                    <img className={styles['box-icon']} src="icons/box.svg" alt="box" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['lot-container']}>
                            <div className={styles['lot-details']}>
                                <div>Lot #1830</div>
                                <div className={styles['lot-product']}>
                                    <div>Sweet Potato: 800/800</div>
                                    <img className={styles['box-icon']} src="icons/box.svg" alt="box" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}