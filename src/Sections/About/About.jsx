import React from "react";
import "./About.css";
import transform from "../../images/desktop/image-transform.jpg";
import standOut from "../../images/desktop/image-stand-out.jpg";
import transformForMobile from "../../images/mobile/image-transform.jpg";
import standOutForMobile from "../../images/mobile/image-stand-out.jpg";

const aboutData = [
    {
        id: "about-1",
        title: "Transform your brand",
        text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        imgSrc: transform,
        imgSrcForMobile: transformForMobile,
        imgAlt: "Transform your brand",
        link: "#",
        orderClass: "md:order-last order-first",
    },
    {
        id: "about-2",
        title: "Stand out to the right audience",
        text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        imgSrc: standOut,
        imgSrcForMobile: standOutForMobile,
        imgAlt: "Stand out to the right audience",
        link: "#",
        orderClass: "order-first",
    },
];

function About() {
    return (
        <section id="about" className="about">
            {aboutData.map((item, index) => (
                <div id={item.id} className="about-row" key={index}>
                    <div className="about-item" tabIndex="0">
                        <h2 className="about-heading">{item.title}</h2>
                        <p className="about-text">{item.text}</p>
                        <a href={item.link} className="about-link">Learn more</a>
                    </div>
                    <picture className={`about-image ${item.orderClass}`}>
                        <source srcSet={item.imgSrcForMobile} media="(max-width: 480px)" />
                        <img
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            loading={item.id === "about-2" ? "lazy" : undefined}
                        />
                    </picture>
                </div>
            ))}
        </section>
    );
}

export default About;