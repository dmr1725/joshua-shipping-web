'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Logo } from '@/app/ui/logo';
import { Button } from '@/app/ui/button/button';
import styles from './header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

export const Header = () => {
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
    <header className={styles['sticky']}>
      <div className={styles['header-shadow']}>
        <div className={styles['header-container']}>
          <Link href="/">
            <Logo src='/logo/dark_jsl.svg' />
          </Link>
          <div className={styles['hamburger']} onClick={toggleMenu}>
            {!menuOpen ? (
              <GiHamburgerMenu size={24} />
            ) : (
              <Image
                src='/icons/x.svg'
                alt='close menu'
                layout='responsive'
                width={100}
                height={50}
              />
            )}
          </div>
          <div className={styles['header-info-container']}>
            <Link href="/about-us">
              <div className={styles['header-info']}>About Us</div>
            </Link>
            <Link href="/contact-us">
              <div className={styles['header-info']}>Contact Us</div>
            </Link>
          </div>
          <div className={`${styles['sign-in-button']}`}>
            <Link href="/sign-in">
              <Button className={`w-[7.5rem]`}>
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background overlay and dropdown */}
      {menuOpen && (
        <div className={styles['dropdown-menu']} ref={dropdownRef}>
          <Link href="/about-us">
            <div className={styles['header-info']} onClick={toggleMenu}>About Us</div>
          </Link>
          <Link href="/contact-us">
            <div className={styles['header-info']} onClick={toggleMenu}>Contact Us</div>
          </Link>
          <Link href="/sign-in">
            <Button className='w-full' onClick={toggleMenu}>Sign In</Button>
          </Link>
        </div>
      )}
    </header>
  );
};