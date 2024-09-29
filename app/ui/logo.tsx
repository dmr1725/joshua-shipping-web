import Image from 'next/image';
import {FC} from 'react';

interface LogoProps {
    src: string;
}
export const Logo: FC<LogoProps> = ({src}) => {
    return (
        <div>
            <Image 
                src={src}
                alt='jsl logo'
                layout='responsive'
                width={100}
                height={50}  
            />
        </div>
    )
}