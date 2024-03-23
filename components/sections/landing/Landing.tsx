import Image from 'next/image'
import "./Styles.scss"


export const Landing = () => {
    return (
        <span>
            <div className="container">
                <Image
                    src="/landing.gif"
                    alt="Tractor loading GIF"
                    width={700}
                    height={500}
                />
                <h1 className="slide-in-left">Welcome to Don Jeere</h1>
                <h3 className="slide-in-right">For all your Tractoring needs!</h3>
            </div>
        </span>
    )
};