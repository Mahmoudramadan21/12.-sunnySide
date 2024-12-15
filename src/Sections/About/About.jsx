import React from 'react';
import "./About.css";
import transform from "../../images/desktop/image-transform.jpg";
import standOut from "../../images/desktop/image-stand-out.jpg";
import transformForMobile from "../../images/mobile/image-transform.jpg";
import standOutForMobile from "../../images/mobile/image-stand-out.jpg";

// Define data as an object
const aboutData = [
    {
        id: "about-1",
        title: "Transform your brand",
        text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        imgSrc: transform,
        imgSrcForMobile: transformForMobile,
        imgAlt: "Transform your brand",
        link: "#",
        orderClass: "-order-last md:-order-first",
    },
    {
        id: "about-2",
        title: "Stand out to the right audience",
        text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        imgSrc: standOut,
        imgSrcForMobile: standOutForMobile,
        imgAlt: "Stand out to the right audience",
        link: "#",
        orderClass: "-order-last",
    },
];

function About() {
    // Define CSS classes as variables
    const sectionClasses = 'about';
    const rowClasses = 'grid grid-cols-1 md:grid-cols-2 text-center md:text-left items-center';
    const itemClasses = 'about-item xl:p-32 md:p-7 flex flex-col items-center md:items-start p-12';
    const headingClasses = 'item-heading text-neutral-desaturatedBlue font-fraunces lg:text-5xl md:text-3xl text-4xl';
    const textClasses = 'item-text my-4 lg:my-12 text-[1.1rem] lg:text-[1.2rem] max-w-[490px] text-neutral-grayishBlue';
    const linkClasses = 'item-link uppercase font-bold text-neutral-desaturatedBlue font-fraunces tracking-wide';

    return (
        <section id="about" className={sectionClasses}>
            {aboutData.map((item, index) => (
                <div id={item.id} className={rowClasses} key={index}>
                    <div className={itemClasses}>
                        <div className={headingClasses}>
                            <h2>{item.title}</h2>
                        </div>
                        <div className={textClasses}>
                            <p>{item.text}</p>
                        </div>
                        <div className={linkClasses}>
                            <a href={item.link}>Learn more</a>
                        </div>
                    </div>
                    <picture className={`about-image ${item.orderClass}`}>
                        <source srcSet={item.imgSrcForMobile} media='(max-width: 480px)' />
                        <img src={item.imgSrc} alt={item.imgAlt} className="project-image" />
                    </picture>
                </div>
            ))}
        </section>
    );
}

export default About;
