import { Link } from "react-router-dom"

import "./style.css"
import linkeinLogo from "../../assets/logos/linkedin_logo.png"
import facebookLogo from "../../assets/logos/facebook_logo.png"
import instagramLogo from "../../assets/logos/instagram_logo.png"

const Footer = ({ links }) => {

    return (
        <footer className="footerContainer">
            <div className="footer-topContainer">
            <div className="footer-smContainer">
                <a href="" target="_blank" rel="noopener noreferrer"><img src={linkeinLogo} alt="linkedin logo" /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook logo" /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="instagram logo" /></a>
            </div>
            <div className="footer-linksContainer">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    {links.map((item, index) => {
                        return (
                            <li key={index}><Link to={item.path}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
            </div>
            <div className="footer-contactUs">
                <h2>HÁBLENOS</h2>
            </div>
            <div className="footer-copyright">
                <p>All rights reserved 2024 © Colorcopygroup</p>
            </div>
        </footer>
    )
}

export default Footer