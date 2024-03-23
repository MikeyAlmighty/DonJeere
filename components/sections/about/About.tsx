import './Styles.scss';
import {aboutUsPartOne} from './data'
import Image from "next/image";
import {Bubble} from "../../bubble/Bubble";

export const About = () => (
    <>
        <p className='heading'>About Us</p>
        <span className="aboutContainer" id='about'>
            <p className={"text-left"}>{aboutUsPartOne}</p>
            <Image
                src="https://picsum.photos/200/300"
                alt="Random Image from Picsum"
                width={500}
                height={600}
            />
        </span>
        <span className="bubble-container">
            <Bubble className={"about-bubble-primary"} text={"Friendly Team"}/>
            <Bubble className={"about-bubble-secondary"} text={"24/7 Assistance"}/>
            <Bubble className={"about-bubble-primary"} text={"Involved"}/>
        </span>
    </>
);