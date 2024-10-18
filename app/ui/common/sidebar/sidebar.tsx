'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from '../../logo';
import Link from 'next/link';
import styles from './sidebar.module.css';

interface SidebarOption {
    label: string;
    icon: string; 
    link: string;
}

interface SideBarProps {
    options: SidebarOption[];
}

export const SideBar: React.FC<SideBarProps> = ({ options }) => {
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
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
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
                    {options.map((option) => (
                        <Link href={option.link} key={option.label} className={styles['icon-info']}>
                            <img src={option.icon} alt={option.label} className={styles['icon']} />
                            <div>{option.label}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles['logout-section']}>
                <Link href="/logout" className={styles['icon-info']}>
                    <img className={styles['icon']} src="/icons/logout.svg" alt="container"/>
                    <div>Log Out</div>
                </Link>
            </div>

            {menuOpen && (
                <div className={styles['dropdown-menu']} ref={dropdownRef}>
                    {options.map((option) => (
                        <Link href={option.link} key={option.label} className={styles['icon-info']}>
                            <img src={option.icon} alt={option.label} className={styles['icon']} />
                            <div>{option.label}</div>
                        </Link>
                    ))}
                    <div className={styles['icon-info']}>
                        <img className={styles['icon']} src="/icons/logout.svg" alt="container"/>
                        <div>Log Out</div>
                    </div>
                </div>
            )}
        </div>
    );
};