import React from 'react'
import "./About.css"
import transform from "../../images/desktop/image-transform.jpg"
import standOut from "../../images/desktop/image-stand-out.jpg"

function About() {
    return (
        <section id="about" className="about">
            <div className="row-1 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                <div className="about-item xl:p-32 md:p-7 flex flex-col items-center md:items-start p-12">
                    <div className="item-heading text-neutral-desaturatedBlue font-fraunces lg:text-5xl md:text-3xl
                                    text-4xl">
                        <h2>Transform your brand</h2>
                    </div>
                    <div className="item-text my-4 lg:my-6 text-[1.1rem] lg:text-[1.2rem] max-w-[490px] text-neutral-grayishBlue"> <p>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through compelling visuals
                        that do most of the marketing for you.
                    </p></div>
                    <div className="item-link uppercase font-bold text-neutral-desaturatedBlue font-fraunces tracking-wide"><a href="#">Learn more</a></div>
                </div>
                <div className="about-image -order-last md:-order-first">
                    <img src={transform} alt="Transform your brand" />
                </div>
            </div>
            <div className="row-2 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                <div className="about-item xl:p-32 md:p-7 flex flex-col items-center md:items-start p-12">
                    <div className="item-heading text-neutral-desaturatedBlue font-fraunces lg:text-5xl md:text-3xl
                                    text-4xl">
                        <h2>Stand out to the right audience</h2>
                    </div>
                    <div className="item-text my-4 lg:my-6 text-[1.1rem] lg:text-[1.2rem] max-w-[490px] text-neutral-grayishBlue"> <p>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
                    </p></div>
                    <div className="item-link uppercase font-bold text-neutral-desaturatedBlue font-fraunces tracking-wide"><a href="#">Learn more</a></div>
                </div>
                <div className="about-image -order-last">
                    <img src={standOut} alt="Transform your brand" />
                </div>
            </div>
        </section>
    )
}

export default About;