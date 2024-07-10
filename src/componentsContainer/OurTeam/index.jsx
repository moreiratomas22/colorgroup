import "./style.css"
import iazzettaImg from "../../assets/about/team/iazzetta.png"
import horacio_contrerasImg from "../../assets/about/team/horacio_contreras.png"
import lucas_contrerasImg from "../../assets/about/team/lucas_contreras.png"
import CardsCarousel from "../../components/CardsCarousel"

const OurTeam = () => {

    const team = [
        {
            img: iazzettaImg,
            name: "Juan Manuel Iazzetta",
            rol:"CEO",
            desc:"Control general de la empresa",
            linkedin: ""
        },
        {
            img: horacio_contrerasImg,
            name: "Horacio Perez Contreras",
            rol:"CFO",
            desc:"Engargado del departamento de finanzas",
            linkedin: ""
        },
        {
            img: lucas_contrerasImg,
            name: "Lucas Perez Contreras",
            rol:"COO",
            desc:"Encargado de la implementación operaciones",
            linkedin: ""
        },
        {
            img: iazzettaImg,
            name: "Juan Manuel Iazzetta",
            rol:"CEO",
            desc:"Control general de la empresa",
            linkedin: ""
        },
        {
            img: horacio_contrerasImg,
            name: "Horacio Perez Contreras",
            rol:"CFO",
            desc:"Engargado del departamento de finanzas",
            linkedin: ""
        },
        {
            img: lucas_contrerasImg,
            name: "Lucas Perez Contreras",
            rol:"COO",
            desc:"Encargado de la implementación operaciones",
            linkedin: ""
        },
        {
            img: iazzettaImg,
            name: "Juan Manuel Iazzetta",
            rol:"CEO",
            desc:"Control general de la empresa",
            linkedin: ""
        },
        {
            img: horacio_contrerasImg,
            name: "Horacio Perez Contreras",
            rol:"CFO",
            desc:"Engargado del departamento de finanzas",
            linkedin: ""
        },
        {
            img: lucas_contrerasImg,
            name: "Lucas Perez Contreras",
            rol:"COO",
            desc:"Encargado de la implementación operaciones",
            linkedin: ""
        }
    ]

    return (
        <section className="ourTeamContainer">
            <h2>Nuestro equipo</h2>
            <CardsCarousel items={team} />
        </section>
    )
}

export default OurTeam