import "./Styles.scss"
import { metricData } from './data'

export const Metrics = () => {
    return(
        <span className="metricContainer">
            <span>
                <h2 className="title">Clients</h2>
                <p className="value">{metricData.clients}</p>
            </span>
            <span>
                <h2 className="title">Tractors Sold</h2>
                <p className="value">{metricData.sold}</p>
            </span>
            <span>
                <h2 className="title">Stores Nationwide</h2>
                <p className="value">{metricData.stores}</p>
            </span>
        </span>
    )
}