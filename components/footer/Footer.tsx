import { footerData } from './data'
import "./Styles.scss";

export const Footer = () => {
        return(
        <footer>
            <span>
                <div>
                    Content <p>{footerData.content}</p>
                </div>
                <div>
                    Information <p>{footerData.information}</p>
                </div>
                <div>
                    Legal <p>{footerData.legal}</p>
                </div>
            </span>
        </footer>
    )
}