import { useState } from "react"
import "./style.css"

const DropDown = () => {
    const [language, setLanguage] = useState("Español")
    const [showDropDown, setShowDropDown] = useState(false)

    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };

    const handleClick = (lan) => {
        if (lan === "ESP") {
            setLanguage("Español")
        } else {
            setLanguage("English")
        }
        setShowDropDown(false)
    }
    
    return (
        <div className="dropDown">
            <button onClick={toggleDropdown} className="dropDown-button">
                {language}
            </button>
            { (
                <div className={`dropDown-hiddenContent ${showDropDown ? "dropDown-showContent" : ""}`}>
                    <ul>
                        <li onClick={()=>handleClick("ESP")}>Español</li>
                        <li onClick={()=>handleClick("ENG")}>English</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown