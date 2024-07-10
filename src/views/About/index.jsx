import { AboutDescription, AboutFrontPage, OurTeam, Testimony, Ubication } from "../../componentsContainer"

import "./style.css"

const About = () => {

    return (
        <main>
            <AboutFrontPage />
            <AboutDescription />
            <OurTeam />
            <Testimony />
            <Ubication />
        </main>
    )
}

export default About