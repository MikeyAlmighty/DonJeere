import Image from 'next/image'
import "./Styles.scss"

export const Landing = () => {
    return (
        <span>
            <div className="landingContainer">
                <h1 className="slide-in-left">Welcome to Don Jeere</h1>
                <p className="slide-in-right">For all your Tractoring needs!</p>
                <Image
                    src="/landing.gif"
                    unoptimized={true}
                    alt="Tractor loading GIF"
                    style={{ borderRadius: '25px' }}
                    width={400}
                    height={400}
                />
            </div>
        </span>
    )
};