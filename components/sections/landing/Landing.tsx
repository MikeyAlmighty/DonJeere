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
                    alt="Tractor loading GIF"
                    unoptimized={true}
                    style={{ borderRadius: "25px"}}
                    width={300}
                    height={150}
                />
            </div>
        </span>
    )
};