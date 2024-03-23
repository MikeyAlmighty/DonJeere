import React from 'react';
import Link from "next/link";

import './Styles.scss';

export const Header = () => {
    return(
        <header>
            <h1>Don Jeere</h1>
            <nav>
                <ul>
                    <Link className='link' href="/">Home</Link>
                    <Link className='link' href="#about">About</Link>
                    <Link className='link' href="#team">Our Team</Link>
                    <Link className='link' href="#gallery">Gallery</Link>
                    <Link className='link' href="#contact">Contact Us</Link>
                </ul>
            </nav>
        </header>
    )
};