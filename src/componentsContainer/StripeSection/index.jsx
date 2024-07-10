import "./style.css"
import { Stripe } from "../../components"

const StripeSection = () => {

    return (
        <section className="stripeSectionContainer">
            <h2>Somos un grupo empresarial que ofrece soluciones integrales en comunicación visual, marketing y análisis financiero.</h2>
            <Stripe />
        </section>
    )
}

export default StripeSection