import PropTypes from "prop-types";
import "./statistics.css"

export const Statistics = ({ title, data }) => {
    return (
        <section className="statistics">
            {!!title && <h2 className="title">{title}</h2>}
            
            <ul className="stat-list">
                {data.map(({ id, label, percentage }) =>
                    <li className="item" key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>)}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        }
    ))
}