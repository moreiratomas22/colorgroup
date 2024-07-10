import { AboutDescription, AboutFrontPage, OurTeam, Testimony } from "../../componentsContainer"

import "./style.css"

const About = () => {

    return (
        <main>
            <AboutFrontPage />
            <AboutDescription />
            <OurTeam />
            <Testimony />
        </main>
    )
}

export default About