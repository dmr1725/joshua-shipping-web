import styles from './footer.module.css'

export const Footer = () => {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['jsl-logo-container']}>
                <img src='/logo/light_jsl.svg'/>
                <div className={styles['jsl-footer-text-style']}>Streamlined logistics services for seamless deliveries.</div>
            </div>
            <div className={styles['jsl-about-container']}>
                <div className={styles['jsl-about-section-container']}>
                    <div className={styles['jsl-footer-text-style']}>Company</div>
                    <div className={styles['jsl-footer-sm-text-style']}>About Us</div>
                </div>
                <div className={styles['jsl-about-section-container']}> 
                    <div className={styles['jsl-footer-text-style']}>Contact Us</div>
                    <div className={styles['jsl-footer-sm-text-style']}>Get Quote</div>
                </div>
            </div>
        </div>
    )
}