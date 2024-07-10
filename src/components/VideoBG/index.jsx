import "./style.css"

const VideoBG = ({video}) => {

    return (
        <video autoPlay muted loop playsInline id="videoBG">
                <source src={video} type="video/mp4" />
        </video>
    )
}

export default VideoBG