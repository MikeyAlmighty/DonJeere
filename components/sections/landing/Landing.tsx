import Image from 'next/image'
import "./Styles.scss"


export const Landing = () => {
    return (
        <span>
            <div className="container">
                <Image
                    src="/landing.gif"
                    alt="Tractor loading GIF"
                    width={500}
                    height={300}
                />
                <h1 className="slide-in">Welcome to Don Jeere</h1>
                <h3 className="slide-in">For all your Tractoring needs!</h3>
            </div>
        </span>
    )
};