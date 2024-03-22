import React from 'react';
import './Header.scss';

export const Header = (props) => {
    return(
        <header>
            <h1>Don Jeere</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    )
}