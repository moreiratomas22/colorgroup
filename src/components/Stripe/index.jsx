import { useEffect } from "react";

import "./style.css"

const Stripe = () => {

    const screenWidth = window.innerWidth;
    const numColumns = Math.ceil(screenWidth / 10);
    const numRows = 30;


    useEffect(() => {
        const diamonds = document.querySelectorAll('.stripe-diamond');
        diamonds.forEach(diamond => {
            diamond.addEventListener('mouseover', () => {
                setTimeout(() => {
                    diamond.classList.add('stripe-animate');
                }, 500);
            });
            diamond.addEventListener('mouseover', () => {
                setTimeout(() => {
                    diamond.classList.remove('stripe-animate');
                }, 1000);
            });
        });
    }, []);

    return (
        <div className="stripeContainer">
            {Array.from({ length: numRows * numColumns }).map((_, i) => (
                <div key={i} className="stripe-diamond"></div>
            ))}
        </div>
    )
}

export default Stripe