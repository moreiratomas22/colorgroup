import "./style.css"
import { LangButton, NavBar } from "../../components"
import colorGroup_logo from "../../assets/colorGroup_logo.png"

const Header = () => {

    const links = [
        {
            title: "Servicios",
            path: "/services"
        },
        {
            title: "Nostros",
            path: "/about"
        },
        {
            title: "¿Hablamos?",
            path: "/contact",
            special: true
        }
    ]

    return (
        <header className="headerContainer">
            <img src={colorGroup_logo} alt="Color Grupo Logo" />
            <div className="headerContainer-utilsContainer">
                <LangButton />
                <NavBar links={links} />
            </div>
        </header>
    )
}

export default Header