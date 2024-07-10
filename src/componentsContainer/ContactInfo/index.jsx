import "./style.css"
import phone_logo from "../../assets/logos/phone_logo.png"
import mail_logo from "../../assets/logos/mail_logo.png"
import ubication_logo from "../../assets/logos/ubication_logo.png"
import whatsapp_logo from "../../assets/logos/whatsapp_logo.png"
import { Form } from "../../components"

const ContactInfo = () => {

    return (
        <section className="contactInfoContainer">
            <div className="contactInfo">
                <div className="contactInfo-data">
                    <ul>
                        <li><img src={phone_logo} alt="Phone Logo" /><p>+54 9 3547459665</p></li>
                        <li><img src={mail_logo} alt="Phone Logo" /><p>contacto@colorcopygroup.com<br />colorcopyag@gmail.com</p></li>
                        <li><img src={ubication_logo} alt="Phone Logo" /><p>Raúl Alfonsín 157, Alta Gracia Córdoba</p></li>
                        <li><img src={whatsapp_logo} alt="Phone Logo" /><p>Whatsapp Live Chat</p></li>
                    </ul>
                </div>
                <div className="contactInfo-days">
                    <div>
                        <h3>Lunes - Viernes</h3>
                        <p>9:00 AM - 1:00 PM</p>
                        <p>14:00 PM - 18:00 PM</p>
                    </div>
                    <div>
                        <h3>Sábado</h3>
                        <p>9:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>
            <Form />
        </section>
    )
}

export default ContactInfo