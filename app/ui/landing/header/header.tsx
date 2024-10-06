'use client';
import { useState } from 'react';
import Image from 'next/image';
import {Logo} from '@/app/ui/logo';
import {Button} from '@/app/ui/button/button'
import styles from './header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'; 

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles['sticky']}>
      <div className={styles['header-shadow']}>
        <div className={styles['header-container']}>
          <Link href="/">
            <Logo src='/logo/dark_jsl.svg'/>
          </Link>
          <div className={styles['hamburger']} onClick={toggleMenu}>
            {
              !menuOpen ? (
                <GiHamburgerMenu size={24} />
              ) : (
                <Image 
                    src='/icons/x.svg'
                    alt='jsl logo'
                    layout='responsive'
                    width={100}
                    height={50}  
                />
              )
            }
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
            <Button className={`w-[7.5rem]`}>
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={styles['dropdown-menu']}>
          <div>About Us</div>
          <div>Contact Us</div>
          <Button className='w-full'>Sign In</Button>
        </div>
      )}
    </div>
    );
}