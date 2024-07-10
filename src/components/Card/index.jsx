import "./style.css"
import linkedinLogo from "../../assets/logos/linkedin_logo.png"

const Card = ({item}) => {

    return (
        <div className="cardContainer">
            <img className="card-img" src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>{item.rol}</h4>
            <p>{item.desc}</p>
            <a href={item.linkedin} target="_blank" rel="noopener noreferrer"><img className="card-lnLogo" src={linkedinLogo} alt="Linkedin" /></a>
        </div>
    )
}

export default Card