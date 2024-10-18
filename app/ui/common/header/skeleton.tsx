import styles from './header.module.css'; // Import your existing styles
import { shimmer } from '../../shimmer';
    
export const DashboardHeaderSkeleton = () => {
    return (
        <div className={`${styles['header-container']} ${shimmer}`}>
            <div className="h-8 w-48 bg-gray-300" />
        </div>
    );
};