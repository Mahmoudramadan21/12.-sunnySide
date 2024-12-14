import React from 'react'
import "./Services.css"
import graphicDesign from '../../images/desktop/image-graphic-design.jpg'
import graphicDesignFormMobile from '../../images/mobile/image-graphic-design.jpg'
import photography from '../../images/desktop/image-photography.jpg'
import photographyForMobile from '../../images/mobile/image-photography.jpg'


function Services() {
    return (
        <section id='services' className="services grid md:grid-cols-2 grid-cols-1">
            <div id='graphic-design' className="services-item  relative">
                <div className="service-bg">
                    <picture>
                        <source srcSet={graphicDesignFormMobile} media="(max-width: 480px)" />
                        <img src={graphicDesign} alt="Graphic Design" className="w-full" />
                    </picture>                </div>
                <div className="service-info absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center md:w-[370px]">
                    <h3 className="service-title font-fraunces text-3xl text-primary-cyan lg:mb-7 md:mb-3 mb-6">Graphic Design</h3>
                    <p className="service-description text-primary-cyan lg:text-[1.1rem] md:text[0.9rem] text-[1.1rem] opacity-80">
                        Great design makes you memorable.We deliver artwork that underscores your brand message and
                        captures potential clients' attention.
                    </p>
                </div>
            </div>
            <div id='photgraphy' className="services-item  relative">
                <div className="photgraphy-bg">
                    <picture>
                        <source srcSet={photographyForMobile} media="(max-width: 480px)" />
                        <img src={photography} alt="Photgraphy" className="w-full" />
                    </picture>                </div>
                <div className="service-info absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center md:w-[370px]">
                    <h3 className="service-title font-fraunces text-3xl text-primary-cyan lg:mb-7 md:mb-3 mb-6">Photography</h3>
                    <p className="service-description text-primary-cyan lg:text-[1.1rem] md:text[0.9rem] text-[1.1rem] opacity-80">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </section >
    )
}

export default Services;