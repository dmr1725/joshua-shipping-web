import { Button } from '../button/button'
import styles from './sign-in.module.css'

export const SignIn = () => {
    return (
        <div className={styles['sign-in-container']}>
            <img src="/photos/login.png" alt="login-photo" className={styles['login-image']} />
            <div className={styles['form-container']}>
                <div className={styles['sign-in-form-container']}>
                    <h1 className={styles['sign-in-form-header']}>Welcome Back!</h1>
                    <div>
                        <label className={styles['sign-in-label-style']} htmlFor="email">Email</label>
                        <div className={styles['input-container']}>
                            <input className={styles['input-background']} type="text" id="email" name="email" placeholder="Type here..."/>
                            <div className={styles['input-line']}></div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] pt-[1rem] px-[4rem] lg:px-[12rem] lg:w-[100%]'>
                    <Button className={`w-[100%]`}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}