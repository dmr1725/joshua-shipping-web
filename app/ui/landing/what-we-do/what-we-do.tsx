'use client';
import React, { useState, FC } from 'react';
import styles from './what-we-do.module.css';

interface Card {
    id: number;
    image: string,
    icon: string;
    title: string;
    text: string;
}

export const WhatWeDo = () => {
    const cards: Card[] = [
        {
            id: 1,
            image: 'cards/preview1.png',
            icon: 'icons/container2.svg',
            title: 'Pick Up and Transportation',
            text: 'We begin with shipment pick-up at the port and assist with customs brokerage to ensure compliance with regulations and smooth clearance processes. Once cleared, items are transported in temperature-controlled vehicles to ensure optimal freshness.'
        },
        {
            id: 2,
            image: 'cards/preview2.png',
            icon: 'icons/inventory2.svg',
            title: 'Inventory Tracking',
            text: 'We utilize advanced inventory tracking systems to manage stock levels efficiently and provide you with real-time updates. You will be able to view and manage your inventory through your personalized client dashboard.'
        },
        {
            id: 3,
            image: 'cards/preview3.png',
            icon: 'icons/truck2.svg',
            title: 'Dispatch and Delivery',
            text: 'You will be able to schedule deliveries through your dashboard. We will promptly deliver them to meet your business arrangements, ensuring that products reach local businesses and markets promptly.'
        }
    ]

    const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);

    const handleClickCard = (card: Card) => {
        setSelectedCard(card);
    }

    return (
        <div>
            <div className={styles['what-we-do-container']}>
                <div>
                    <div className='text-4xl font-bold leading-normal not-italic'>What We Do</div>
                    <div className='w-[100%] lg:w-[37.5rem] text-lg font-normal leading-normal not-italic'>We provide logistics services tailored to your business needs. With our proprietary client dashboard, you will will receive updates in real time about everything related to your items.</div>
                </div>
                <div className={styles['cards-outer-container']}>
                    <img className={styles['selected-image']} src={selectedCard.image}/>
                    <div className={styles['cards-inner-container']}>
                        {cards.map((card) => (
                            <div 
                                key={card.id} 
                                className={`${styles['card-container']} ${selectedCard.id == card.id ? styles['selected-card']: '' }`}
                                onClick={() => handleClickCard(card)}
                            >
                                <img className={styles['icon']} src={card.icon}/>
                                <div>
                                    <div className={styles['card-title']}>{card.title}</div>
                                    <div className={styles['card-text']}>{card.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}