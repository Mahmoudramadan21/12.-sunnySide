import React from 'react';
import "./Hero.css";
import scrollIndicator from "../../images/icon-arrow-down.svg";

function Hero() {
    // Define CSS classes as variables
    const containerClasses = `container mx-auto px-4 flex flex-col items-center 
                               text-center p-24 lg:gap-36 md:gap-12 gap-20 
                               lg:p-24 md:p-16`;

    const headingClasses = 'hero-heading uppercase font-fraunces text-white tracking-widest md:text-7xl text-5xl';

    const indicatorClasses = 'hero-scroll-indicator';

    return (
        <section className="hero">
            <div className={containerClasses}>
                <h2 className={headingClasses}>
                    We are creatives
                </h2>
                <div className={indicatorClasses}>
                    <img src={scrollIndicator} alt="Scroll down indicator" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
