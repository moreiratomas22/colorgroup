import "./style.css"
import aboutVideoBG from "../../assets/frontPage/about.mp4"
import { VideoBG } from "../../components"

const AboutFrontPage = () => {

    return (
        <section className="aboutFrontPageContainer">
            <VideoBG video={aboutVideoBG} />
            <h2 className="aboutFrontPage-title aboutFrontPage-title1">SOBRE</h2>
            <h2 className="aboutFrontPage-title aboutFrontPage-title2">NOSOTROS</h2>
            <div className="aboutFrontPage-quoteContainer">
                <p className="aboutFrontPage-quote1">"Las grandes cosas no se hacen por impulso, sino por una serie de pequeñas cosas reunidas." </p>
                <p className="aboutFrontPage-quote2">- Vincent van Gogh</p>
            </div>
        </section>
    )
}

export default AboutFrontPage