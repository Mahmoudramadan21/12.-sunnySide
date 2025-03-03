import React from 'react'
import "./Projects.css"
import imgOne from "../../images/desktop/image-gallery-milkbottles.jpg"
import imgTwo from "../../images/desktop/image-gallery-orange.jpg"
import imgThree from "../../images/desktop/image-gallery-cone.jpg"
import imgFour from "../../images/desktop/image-gallery-sugarcubes.jpg"
import imgOneForMobile from "../../images/desktop/image-gallery-milkbottles.jpg"
import imgTwoForMobile from "../../images/desktop/image-gallery-orange.jpg"
import imgThreeForMobile from "../../images/desktop/image-gallery-cone.jpg"
import imgFourForMobile from "../../images/desktop/image-gallery-sugarcubes.jpg"

function Projects() {
    return (
        <section id='projects' className="Projects grid grid-cols-2 md:grid-cols-4 mt-36">
            <picture>
                <source srcSet={imgOneForMobile} media='(max-width: 480px)' />
                <img src={imgOne} alt="Project Item" className="project-image" />
            </picture>
            <picture>
                <source srcSet={imgTwoForMobile} media='(max-width: 480px)' />
                <img src={imgTwo} alt="Project Item" className="project-image" />
            </picture>
            <picture>
                <source srcSet={imgThreeForMobile} media='(max-width: 480px)' />
                <img src={imgThree} alt="Project Item" className="project-image" />
            </picture>
            <picture>
                <source srcSet={imgFourForMobile} media='(max-width: 480px)' />
                <img src={imgFour} alt="Project Item" className="project-image" />
            </picture>
        </section>
    )
}

export default Projects;