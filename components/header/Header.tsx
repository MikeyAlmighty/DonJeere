import React from 'react';
import Link from "next/link";

import './Styles.scss';

export const Header = (props) => {
    return(
        <header>
            <h1>Don Jeere</h1>
            <nav>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>
        </header>
    )
};