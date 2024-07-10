import "./style.css"
import contactFrontPage from "../../assets/frontPage/contact.png"

const ContactFrontPage = () => {

    return (
        <section className="contactFrontPageContainer">
            <img className="contactFrontPage-bg" src={contactFrontPage} alt="Contact Front Page" />
            <h2 className="contactFrontPage-title1">ENVÍANOS</h2>
            <h2 className="contactFrontPage-title2">UN MENSAJE</h2>
            <p className="contactFrontPage-p">Contáctenos hoy mismo para comenzar a transformar su visión en realidad. Estamos aquí para ayudarles en cada paso del camino.</p>
        </section>
    )
}

export default ContactFrontPage