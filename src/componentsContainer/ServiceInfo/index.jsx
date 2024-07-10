import "./style.css"
import { DiamondLogo } from "../../components"

const ServiceInfo = ({ title, items }) => {

    return (
        <div className="servicesInfoContainer">
            <h2>{title}</h2>
            <div className="servicesInfo-verticalLine"></div>
            <div className="servicesInfo-itemsContainer">
                {items.map((item, index) => (
                    <div key={index} className="servicesInfo-itemContainer">
                        <div className="servicesInfo-item-textContainer">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <ul className="servicesInfo-item-list">
                            {item.list.map((itemList, index) => (
                                <li key={index}>{itemList}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="servicesInfo-diamondLogoContainer">
                <DiamondLogo size={16} />
            </div>
        </div>
    )
}

export default ServiceInfo