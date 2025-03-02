import React from "react";
import "./Hero.css";
import scrollIndicator from "../../images/icon-arrow-down.svg";

function Hero() {
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