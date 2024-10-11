import { Logo } from '../../logo';
import styles from './sidebar.module.css';

export const SideBar = () => {
    return (
        <div className={styles['main-container']}>
            <div className={styles['sidebar-info']}>
                <div className={styles['logo']}>
                    <Logo src='/logo/light_jsl.svg' />
                </div>
                <div className={styles['sidebar-options']}>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/dashboard.svg" alt="container"/>
                        <div>Profile</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/container2.svg" alt="container"/>
                        <div>Orders</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/payments.svg" alt="container"/>
                        <div>Payments</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/truck2.svg" alt="container"/>
                        <div>Dispatches</div>
                    </div>
                </div>
            </div>
            <div className={styles['icon-info']}>
                <img className={styles['icon']} src="icons/logout.svg" alt="container"/>
                <div>Log Out</div>
            </div>
        </div>
    )
}