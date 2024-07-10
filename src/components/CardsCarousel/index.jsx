import { useState } from "react";

import "./style.css"
import Card from "../Card"

const CardsCarousel = ({ items }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalLevels = Math.ceil(items.length / 3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLevels);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLevels) % totalLevels);
    };

    return (
        <>
            <div className="cardCarouselContainer-outer">
                <div
                    className="cardCarouselContainer"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => {
                        return <Card key={index} item={item} />
                    })}
                </div>
            </div>
            <div className="cardCarousel-utils">
                <div className="cardCarousel-levelContainer">
                    {Array.from({ length: totalLevels }).map((_, index) => (
                        <div
                            key={index}
                            className={`cardCarousel-level ${currentIndex === index ? "cardCarousel-level-selected" : ""}`}
                        ></div>
                    ))}
                </div>
                <div className="cardCarousel-buttons">
                    <div onClick={prevSlide} className="cardCarousel-buttons-buttonContainer">
                        <div className="cardCarousel-buttons-horizontalLine">
                            <div className="cardCarousel-buttons-leftButton-diagonalTop"></div>
                            <div className="cardCarousel-buttons-leftButton-diagonalBottom"></div>
                        </div>
                    </div>
                    <div onClick={nextSlide} className="cardCarousel-buttons-buttonContainer">
                        <div className="cardCarousel-buttons-horizontalLine">
                            <div className="cardCarousel-buttons-rightButton-diagonalTop"></div>
                            <div className="cardCarousel-buttons-rightButton-diagonalBottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsCarousel