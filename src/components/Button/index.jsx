import "./style.css"

const Button = ({title, isSubmit}) => {

    return (
        <button className="customButton" type={isSubmit ? "submit" : ""}>{title}</button>
    )
}

export default Button