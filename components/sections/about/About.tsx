import './Styles.scss';
import { aboutUs } from './data'
import {Card} from "../../card/Card";

export const About = () => {
    return (
        <span className="aboutContainer" id='about'>
            <p className='heading'>About Us</p>
            <Card
                className={'cardContainer'}
                description={aboutUs}
            />
        </span>
    )
}