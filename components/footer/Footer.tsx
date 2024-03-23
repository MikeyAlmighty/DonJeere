import { footerData } from './data'
import "./Styles.scss";
import Link from 'next/link'

export const Footer = () => {
        return(
        <footer>
            <span className="footerContainer">
                <div>
                    <h3 className='footerHeadings'>Models</h3>
                    <Link href="#showcase" className='link'>View Models</Link>
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
                    <Link href="#contact-us" className='link'>Contact Us</Link>
                </div>
            </span>
            <p className='copyright'>Copyright © 2024. Don Jeere All rights reserved</p>
        </footer>
    )
}