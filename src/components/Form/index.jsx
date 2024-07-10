import "./style.css"
import Button from "../Button"

const Form = () => {

    return (
        <form className="formContainer">
            <div className="form-firtsLastName">
                <div className="form-labelInputContainer">
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" name="first_name" id="first_name" />
                </div>
                <div className="form-labelInputContainer">
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" name="last_name" id="last_name" />
                </div>
            </div>
            <div className="form-labelInputContainer">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-labelInputContainer">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <div className="form-buttonContainer">
            <Button title="Enviar" isSubmit={true} />
            </div>
        </form>
    )
}

export default Form