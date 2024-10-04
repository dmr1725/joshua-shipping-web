import {Button} from '@/app/ui/button/button'
import styles from './get-in-touch.module.css'

export const GetInTouch = () =>{
    return (
        <div className={styles['get-in-touch-container']}>
            <div className={styles['get-in-touch-info']}>
                <div className={styles['get-in-touch-header-style']}>Get in touch with us</div>
                <div className={styles['get-in-touch-text-style']}>Ready to streamline your logistics?</div>
            </div>
            <div>
                <Button className={`w-[7.5rem]`}>Get Quote</Button>
            </div>
        </div>
    )
}