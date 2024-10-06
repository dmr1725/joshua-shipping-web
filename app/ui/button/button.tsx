import styles from '@/app/ui/button/button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
  
export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        className={`${styles.button} ${className}`}
        >
        {children}
        </button>
    );
}