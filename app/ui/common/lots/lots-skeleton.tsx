import styles from './lots.module.css';
import { shimmer } from '../../shimmer';

export const LotsSkeleton = () => {
    return (
        <div className={styles['lots-container']}>
            {/* lot container */}
            <div className={`${styles['lot-container']} ${shimmer}`}>
                {/* lot details */}
                <div className={styles['lot-details']}>
                    <div className={`${shimmer}`} style={{ width: '60px', height: '20px', marginBottom: '10px' }}></div>
                    {/* lot product */}
                    <div className={styles['lot-product']}>
                        <div className={`${shimmer}`} style={{ width: '200px', height: '20px' }}></div>
                        <div className={`${shimmer}`} style={{ width: '30px', height: '30px' }}></div>
                    </div>
                </div>
            </div>

            <div className={`${styles['lot-container']} ${shimmer}`}>
                {/* lot details */}
                <div className={styles['lot-details']}>
                    <div className={`${shimmer}`} style={{ width: '60px', height: '20px', marginBottom: '10px' }}></div>
                    {/* lot product */}
                    <div className={styles['lot-product']}>
                        <div className={`${shimmer}`} style={{ width: '200px', height: '20px' }}></div>
                        <div className={`${shimmer}`} style={{ width: '30px', height: '30px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}