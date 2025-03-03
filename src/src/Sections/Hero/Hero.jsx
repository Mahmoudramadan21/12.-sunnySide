import React from 'react';
import "./Hero.css";
import scrollIndicator from "../../images/icon-arrow-down.svg";

function Hero() {
    // Define CSS classes as variables
    const containerClasses = `container mx-auto md:px-9 px-3 flex flex-col items-center 
                               text-center md:gap-28 gap-24
                               md:py-28 py-16`;

    const headingClasses = 'hero-heading uppercase font-fraunces text-white tracking-widest lg:text-7xl md:text-5xl text-4xl';

    const indicatorClasses = 'hero-scroll-indicator';

    return (
        <section className="hero">
            <div className={containerClasses}>
                <h1 className={headingClasses}>
                    We are creatives
                </h1>
                <div className={indicatorClasses}>
                    <img src={scrollIndicator} alt="Scroll down indicator" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
