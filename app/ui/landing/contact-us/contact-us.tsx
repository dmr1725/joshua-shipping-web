import {Button} from '@/app/ui/button/button'
import styles from './contact-us.module.css'

export const ContactUs = () => {
    return (
        <div className={styles['contact-us-container']}>
            <h2 className={styles['contact-us-header']}>Tell us about your fulfillment goals!</h2>
            <div className={styles['contact-us-form']}>
                <div className={styles['form-container']}>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="first_name">First Name</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="first_name" name="first_name"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="last_name">Last Name</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="last_name" name="last_name"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className={styles['form-container']}>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="email">Email</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="email" name="email"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className={styles['form-container']}>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="company_name">Company Name</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="company_name" name="company_name"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="phone">Phone</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="tel" id="phone" name="phone" placeholder="+1 000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className={styles['form-container']}>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="company_website">Company Website (Optional)</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="company_website" name="email"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className={styles['form-container']}>
                    <div className={styles['sm-input-container']}>
                        <label className={styles['label-style']} htmlFor="business_needs">Tell us about your business and fulfillment needs</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="business_needs" name="email"/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className='pt-[1rem] w-[100%]'>
                    <Button className={`w-[100%]`}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}