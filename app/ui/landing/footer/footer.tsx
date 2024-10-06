import Link from 'next/link'
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <div className={styles['jsl-logo-container']}>
                <img src='/logo/light_jsl.svg'/>
                <div className={styles['jsl-footer-text-style']}>Streamlined logistics services for seamless deliveries.</div>
            </div>
            <div className={styles['jsl-about-container']}>
                <div className={styles['jsl-about-section-container']}>
                    <div className={styles['jsl-footer-text-style']}>Company</div>
                    <Link href="/about-us">
                        <div className={styles['jsl-footer-sm-text-style']}>About Us</div>
                    </Link>
                </div>
                <div className={styles['jsl-about-section-container']}> 
                    <div className={styles['jsl-footer-text-style']}>Contact Us</div>
                    <Link href="/contact-us">
                        <div className={styles['jsl-footer-sm-text-style']}>Get Quote</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}