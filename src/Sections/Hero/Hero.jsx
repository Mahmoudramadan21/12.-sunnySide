import React from 'react'
import "./Hero.css"
import scrollIndicator from "../../images/icon-arrow-down.svg"

function Hero() {
    return (
        <section className="hero">
            <div className="container mx-auto px-4 flex flex-col items-center lg:p-24 md:p-16 p-24 lg:gap-24 md:gap-12 gap-20  text-center" >
                <h2 className="her-heading uppercase font-fraunces md:text-7xl text-5xl text-white tracking-widest">We are creatives</h2>
                <div className="hero-scroll-indicator">
                    <img src={scrollIndicator} alt="Hero scoll indiactor" />
                </div>
            </div>
        </section>
    )
}

export default Hero;