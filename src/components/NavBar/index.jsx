import { NavLink } from "react-router-dom"

import "./style.css"

const NavBar = ({links}) => {

    return (
        <nav className="navbarContainer">
            <ul>
                {links.map(item=>{
                    return (
                        <li className={item.special ? "navLink-special" : ""}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar