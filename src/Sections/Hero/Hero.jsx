import React from "react";
import "./Hero.css";
import scrollIndicator from "../../images/icon-arrow-down.svg";

function Hero() {
<<<<<<< HEAD
    // Define CSS classes as variables
    const containerClasses = `container mx-auto md:px-9 px-3 flex flex-col items-center 
                               text-center md:gap-28 gap-24
                               md:py-28 py-16`;

    const headingClasses = 'hero-heading uppercase font-fraunces text-white tracking-widest lg:text-7xl md:text-5xl text-4xl';

    const indicatorClasses = 'hero-scroll-indicator';

=======
>>>>>>> 179a13a (Improve: Enhance accessibility by adding ARIA labels and focus styles)
    return (
        <section className="hero" role="banner">
            <div className="hero-container">
                <h1 className="hero-heading">We are creatives</h1>
                <div className="hero-scroll-indicator" aria-hidden="true">
                    <img src={scrollIndicator} alt="" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

export default Hero;