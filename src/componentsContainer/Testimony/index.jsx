import "./style.css"
import { VideoBG } from "../../components"
import testimonyVideo from "../../assets/about/testimony_video.mp4"
import starLogo from "../../assets/logos/star.png"

const Testimony = () => {

    return (
        <section className="testimonyContainer">
            <VideoBG video={testimonyVideo} />
            <div className="image-overlay"></div>
            <div className="testimony-infoContainer">
                <div className="testimony-starsContainer">
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                </div>
                <div className="testimony-textContainer">
                    <p className="testimony-text-quote">"Desde el principio, se involucraron completamente y entendieron perfectamente nuestra visión. Al final, no solo quedé encantada con el resultado, sino que acepté cada cambio que sugirieron, confiando plenamente en su experiencia y habilidades."</p>
                    <p className="testimony-text-quote2">- María García, Cliente Satisfecha</p>
                </div>
            </div>
        </section>
    )
}

export default Testimony