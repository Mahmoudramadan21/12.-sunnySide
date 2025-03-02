import React from 'react';
import "./Projects.css";
import imgOne from "../../images/desktop/image-gallery-milkbottles.jpg";
import imgTwo from "../../images/desktop/image-gallery-orange.jpg";
import imgThree from "../../images/desktop/image-gallery-cone.jpg";
import imgFour from "../../images/desktop/image-gallery-sugarcubes.jpg";
import imgOneForMobile from "../../images/desktop/image-gallery-milkbottles.jpg";
import imgTwoForMobile from "../../images/desktop/image-gallery-orange.jpg";
import imgThreeForMobile from "../../images/desktop/image-gallery-cone.jpg";
import imgFourForMobile from "../../images/desktop/image-gallery-sugarcubes.jpg";

function Projects() {
    return (
        <section id="projects" className="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Our Projects</h2>
            <picture tabIndex="0">
                <source srcSet={imgOneForMobile} media="(max-width: 480px)" />
                <img src={imgOne} alt="Milk bottles on a blue background" className="project-image" loading='lazy' />
            </picture>
            <picture tabIndex="0">
                <source srcSet={imgTwoForMobile} media="(max-width: 480px)" />
                <img src={imgTwo} alt="Orange slice on a plate" className="project-image" loading='lazy' />
            </picture>
            <picture tabIndex="0">
                <source srcSet={imgThreeForMobile} media="(max-width: 480px)" />
                <img src={imgThree} alt="Ice cream cone on a table" className="project-image" loading='lazy' />
            </picture>
            <picture tabIndex="0">
                <source srcSet={imgFourForMobile} media="(max-width: 480px)" />
                <img src={imgFour} alt="Sugar cubes stacked on a table" className="project-image" loading='lazy' />
            </picture>
        </section>
    );
}

export default Projects;