import {Logo} from './logo';
import {Button} from '../button/button'
import styles from './landing.module.css'

export default function Header() {
  return (
      <div className={styles.test}>
        <div className="flex justify-between items-center h-[6.25rem] px-[6.75rem] py-[1.25rem]">
          <Logo/>
          <div className="flex justify-center gap-[6.25rem]">
            <div>About Us</div>
            <div>Resources</div>
            <div>Contact Us</div>
          </div>
          <Button className="w-[7.5rem]">
            Sign In
          </Button>
        </div>
      </div>
    );
}