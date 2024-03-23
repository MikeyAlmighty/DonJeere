import { footerData } from './data'
import "./Styles.scss";

export const Footer = () => {
        return(
        <footer>
            <span>
                <div>
                    <h3 className='footerHeadings'>Content</h3>
                    <p className='link'>View Content</p>
                </div>
                <div>
                    <h3 className='footerHeadings'>Information</h3>
                    <p className='link'>More Information</p>
                </div>
                <div>
                    <h3 className='footerHeadings'>Legal</h3>
                    <p className='link'>Terms and Conditions</p>
                </div>
                <div>
                    <h3 className='footerHeadings'>Help</h3>
                    <p className='link'>Contact Us</p>
                </div>
            </span>
            <p className='copyright'>Copyright © 2024. Don Jeere All rights reserved</p>
        </footer>
    )
}