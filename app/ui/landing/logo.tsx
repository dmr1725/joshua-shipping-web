import Image from 'next/image'

export const Logo = () => {
    return (
        <div>
            <Image 
                src="/logo/landing/jsl.svg"
                alt="jsl logo"
                width={138}
                height={50}
            />
        </div>
    )
}