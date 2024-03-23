import React from 'react';
import Link from "next/link";

import './Styles.scss';

export const Header = () => (
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
            </ul>
        </nav>
    </header>
)