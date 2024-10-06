import {Button} from '@/app/ui/button/button'
import Image from 'next/image';
import styles from './hero-section.module.css'
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div>
        <div className={`${styles['blur-background']} pt-[5.75rem]`}>
            <div className={styles['hero-section-container']}>
                <div className={styles['text-container']}>
                    <div><strong>Streamlined</strong> logistics services for <strong>seamless</strong> deliveries</div>
                    <div>Ensuring fresh deliveries from supplier to market, every time.</div>
                    <Link href="/contact-us" className="w-[7.5rem]">
                        <Button className={`w-[7.5rem]`}>Get Quote</Button>
                    </Link>
                </div>
                <div className={styles['warehouse-container']}>
                    <Image 
                        src='/cards/warehouse.png'
                        alt='warehouse'
                        layout='responsive'
                        width={20}
                        height={19}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
