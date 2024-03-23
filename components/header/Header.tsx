import React from 'react';
import Link from "next/link";

import './Styles.scss';
import {EasterEgg} from "../easter-egg/EasterEgg";
import {toast} from "react-toastify";

export const Header = () => {
    const notify = () => toast("Happy Easter!");
    return(
        <header>
            <h1>Don Jeere</h1>
            <nav>
                <ul>
                    <Link className='link' href="/">Home</Link>
                    <Link className='link' href="#what-we-do">What We Do</Link>
                    <Link className='link' href="#about">About</Link>
                    <Link className='link' href="#team">Our Team</Link>
                    <Link className='link' href="#gallery">Gallery</Link>
                    <Link className='link' href="#contact-us">Contact Us</Link>
                    <EasterEgg handleClick={notify} />
                </ul>
            </nav>
        </header>
    )
}