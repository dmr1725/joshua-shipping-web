import styles from './lots.module.css';
import { shimmer } from '../../shimmer';

export const LotsSkeleton = () => {
    return (
        <div className={styles['lots-container']}>
            {/* Placeholder for loading lots */}
            {[...Array(2)].map((_, index) => (
                <div key={index} className={`${styles['lot-details']} ${shimmer}`}>
                    <div className={styles['lot-number']}>
                        <div className={shimmer} style={{ width: '60px', height: '20px' }}></div>
                    </div>
                    <div className={styles['lot-product']}>
                        <div className={shimmer} style={{ width: '200px', height: '20px' }}></div>
                    </div>
                    <div className={styles['lot-packaging']}>
                        <div className={shimmer} style={{ width: '80px', height: '20px' }}></div>
                    </div>
                    <div className={styles['lot-boxes']}>
                        <div className={shimmer} style={{ width: '60px', height: '20px' }}></div>
                        <div className={shimmer} style={{ width: '30px', height: '30px' }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};