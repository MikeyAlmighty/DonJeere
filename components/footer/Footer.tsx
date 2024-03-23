import { footerData } from './data'
import "./Styles.scss";
import Link from 'next/link'

export const Footer = () => {
        return(
        <footer>
            <span>
                <div>
                    <h3 className='footerHeadings'>Content</h3>
                    <Link href="" className='link'>View Content</Link>
                </div>
                <div>
                    <h3 className='footerHeadings'>Information</h3>
                    <Link href="" className='link'>More Information</Link>
                </div>
                <div>
                    <h3 className='footerHeadings'>Legal</h3>
                    <Link href="" className='link'>Terms and Conditions</Link>
                </div>
                <div>
                    <h3 className='footerHeadings'>Help</h3>
                    <Link href="" className='link'>Contact Us</Link>
                </div>
            </span>
            <p className='copyright'>Copyright © 2024. Don Jeere All rights reserved</p>
        </footer>
    )
}