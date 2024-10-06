'use client';
import { useEffect, useState } from 'react';
import styles from './how-it-works.module.css';

export const HowItWorks = () => {
    const [currentStepId, setCurrentStepId] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    const steps = [
        {
            id: 1,
            image: 'cards/step1.png',
            header: 'Step 1',
            text: 'Ship us your container and send us your documents.',
        },
        {
            id: 2,
            image: 'cards/step2.png',
            header: 'Step 2',
            text: 'We will pick it up at the port, get the release documents, and transport it to our warehouse.',
        },
        {
            id: 3,
            image: 'cards/step3.png',
            header: 'Step 3',
            text: 'We will keep track of your inventory while we make your scheduled deliveries.',
        },
    ];

    console.log(currentStepId)

    useEffect(() => {
        const checkMobileView = () => {
            setIsMobile(window.innerWidth <= 1024); // Setting mobile as <= 1024px
        };

        checkMobileView(); // Check on initial load

        // Add resize listener
        window.addEventListener('resize', checkMobileView);

        let intervalId: ReturnType<typeof setInterval>;
        if (isMobile) {
            // Set up an interval to change the step every 3 seconds in mobile view
            intervalId = setInterval(() => {
                setCurrentStepId((prevStepId) => (prevStepId === 3 ? 1 : prevStepId + 1));
            }, 3000); // Change step every 3 seconds
        }

        // Cleanup interval and event listener on component unmount or on screen size change
        return () => {
            if (intervalId) clearInterval(intervalId);
            window.removeEventListener('resize', checkMobileView);
        };
    }, [isMobile]); // Runs whenever `isMobile` state changes

    return (
        <div className={styles['how-it-works-container']}>
            <div>
                <div className={styles['how-it-works-header']}>How It Works</div>
                <div className={styles['how-it-works-text']}>
                    With us, the process is as easy as 1, 2, 3. Our dedicated team maintains open communication,
                    ensuring that you are informed every step of the way and that your logistics needs are met seamlessly.
                </div>
            </div>
            <div className={styles['steps-container']}>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`${styles['steps-card-container']} ${isMobile && currentStepId !== step.id ? styles['hide-step-card'] : ''}`}
                    >
                        <img className={styles['step-image']} src={step.image} alt={step.header} />
                        <div className={styles['step-header']}>{step.header}</div>
                        <div className={styles['step-text']}>{step.text}</div>
                    </div>
                ))}
                {isMobile && (
                    <div className={styles['ellipse-container']}>
                        <img src={`${currentStepId === 1 ? 'icons/filled_ellipse.svg' : 'icons/empty_ellipse.svg'}`} alt="step 1" />
                        <img src={`${currentStepId === 2 ? 'icons/filled_ellipse.svg' : 'icons/empty_ellipse.svg'}`} alt="step 2" />
                        <img src={`${currentStepId === 3 ? 'icons/filled_ellipse.svg' : 'icons/empty_ellipse.svg'}`} alt="step 3" />
                    </div>
                )}
            </div>
        </div>
    );
};