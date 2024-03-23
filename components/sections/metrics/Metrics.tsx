import "./Styles.scss"
import { metricData } from './data'

export const Metrics = () => {
    return(
        <span className="container">
            <span>
                <h3>Clients</h3>
                <p>{metricData.clients}</p>
            </span>
            <span>
                <h3>Tractors Sold</h3>
                <p>{metricData.sold}</p>
            </span>
            <span>
                <h3>Stores Nationwide</h3>
                <p>{metricData.stores}</p>
            </span>
        </span>
    )
}