import React, {useState} from 'react';
import Link from "next/link";

import './Styles.scss';
import {EasterEgg} from "../easter-egg/EasterEgg";
import {toast} from "react-toastify";
import {isEasterHoliday} from "../../utils/isEasterHoliday";

export const Header = () => {
    const [selectedSection, setSelectedSection] = useState<string>('/');
    const notify = () => toast("Happy Easter!");
    return(
        <header>
            <h1>Don Jeere</h1>
            <nav>
                <ul>
                    <Link className='link' href="/">Home</Link>
                    <Link className='link' href="#what-we-do">What We Do</Link>
                    <Link className='link' href="#about">About</Link>
                    <Link className='link' href="#showcase">Showcase</Link>
                    <Link className='link' href="#contact-us">Contact Us</Link>
                    {/*Easter Egg*/}
                    { isEasterHoliday({ currentTimeStamp: new Date().getTime() }) && <EasterEgg handleClick={notify} />}
                </ul>
            </nav>
        </header>
    )
}