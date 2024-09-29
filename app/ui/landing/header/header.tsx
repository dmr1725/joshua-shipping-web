'use client';
import { useState } from 'react';
import {Logo} from '../../logo';
import {Button} from '../../button/button'
import styles from './header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className={styles['header-shadow']}>
        <div className={styles['header-container']}>
          <Logo src='/landing/logo/dark_jsl.svg'/>
          <div className={styles['hamburger']} onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </div>
          <div className={styles['header-info-container']}>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
          <div className={`${styles['sign-in-button']} flex`}>
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