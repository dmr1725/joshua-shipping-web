import styles from './how-it-works.module.css'

export const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            image: 'cards/step1.png',
            header: 'Step 1',
            text: 'Ship us your container and send us your documents.'
        },
        {
            id: 2,
            image: 'cards/step2.png',
            header: 'Step 2',
            text: 'We will pick it up at the port, get the release documents, and transport it to our warehouse.'
        },
        {
            id: 3,
            image: 'cards/step3.png',
            header: 'Step 3',
            text: 'We will keep track of your inventory while we make your scheduled deliveries.'
        },
        
    ]
    return (
        <div className={styles['how-it-works-container']}>
            <div>
                <div className={styles['how-it-works-header']}>How It Works</div>
                <div className={styles['how-it-works-text']}>With us, the process is as easy as 1, 2, 3. Our dedicated team maintains open communication, ensuring that you are informed every step of the way and that your logistics needs are met seamlessly.</div>
            </div>
            <div className={styles['steps-container']}>
                {steps.map((step) => (
                    <div key={step.id} className={styles['steps-card-container']}>
                        <img className={styles['step-image']} src={step.image}/>
                        <div className={styles['step-header']}>{step.header}</div>
                        <div className={styles['step-text']}>{step.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}