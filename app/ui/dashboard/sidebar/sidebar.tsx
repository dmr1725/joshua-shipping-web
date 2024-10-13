'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from '../../logo';
import styles from './sidebar.module.css';

export const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          toggleMenu();
        }
      };
    
      useEffect(() => {
       
        if (menuOpen) {
          // Add event listener for clicks outside the dropdown
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          // remove event listener
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [menuOpen]);
    
      
    return (
        <div className={styles['main-container']}>
            <div className={styles['sidebar-info']}>
                <div className={styles['hamburger']} onClick={toggleMenu}>
                    {!menuOpen ? (
                    <GiHamburgerMenu size={24} />
                    ) : (
                    <Image
                        src='/icons/white_x.svg'
                        alt='close menu'
                        layout='responsive'
                        width={100}
                        height={50}
                    />
                    )}
                </div>
                <div className={styles['logo']}>
                    <Logo src='/logo/light_jsl.svg' />
                </div>
                <div className={styles['sidebar-options']}>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/dashboard.svg" alt="container"/>
                        <div>Profile</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/container2.svg" alt="container"/>
                        <div>Orders</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/invoice.svg" alt="container"/>
                        <div>Invoices</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/truck2.svg" alt="container"/>
                        <div>Dispatches</div>
                    </div>
                </div>
            </div>
            <div className={styles['logout-section']}>
                <div className={styles['icon-info']}>
                    <img className={styles['icon']} src="icons/logout.svg" alt="container"/>
                    <div>Log Out</div>
                </div>
            </div>

            {/* Background overlay and dropdown */}
            {menuOpen && (
                <div className={styles['dropdown-menu']} ref={dropdownRef}>
                    <div className={styles['icon-info']}>
                            <img className={styles['icon']} src="icons/dashboard.svg" alt="container"/>
                            <div>Profile</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/container2.svg" alt="container"/>
                        <div>Orders</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/invoice.svg" alt="container"/>
                        <div>Invoices</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/truck2.svg" alt="container"/>
                        <div>Dispatches</div>
                    </div>
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="icons/logout.svg" alt="container"/>
                        <div>Log Out</div>
                    </div>
                </div>
            )}
        </div>
    )
}