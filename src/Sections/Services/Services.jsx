import React from 'react';
import "./Services.css";
import graphicDesign from '../../images/desktop/image-graphic-design.jpg';
import graphicDesignFormMobile from '../../images/mobile/image-graphic-design.jpg';
import photography from '../../images/desktop/image-photography.jpg';
import photographyForMobile from '../../images/mobile/image-photography.jpg';

// Define class variables
const sectionClasses = "services grid md:grid-cols-2 grid-cols-1";
const serviceItemClasses = "services-item relative";
const serviceBgClasses = "service-bg";
const serviceInfoClasses = "service-info absolute bottom-10 left-1/2 -translate-x-1/2 text-center md:w-[370px]";
const serviceTitleClasses = "service-title font-fraunces text-3xl text-primary-cyan lg:mb-7 md:mb-3 mb-6";
const serviceDescriptionClasses = "service-description text-primary-cyan lg:text-[1.1rem] md:text-[0.9rem] text-[1.1rem] opacity-80";

// Component for each service
const ServiceItem = ({ image, imageMobile, title, description }) => {
    return (
        <div className={serviceItemClasses}>
            <div className={serviceBgClasses}>
                <picture>
                    <source srcSet={imageMobile} media="(max-width: 480px)" />
                    <img src={image} alt={title} className="w-full" />
                </picture>
            </div>
            <div className={serviceInfoClasses}>
                <h3 className={serviceTitleClasses}>{title}</h3>
                <p className={serviceDescriptionClasses}>
                    {description}
                </p>
            </div>
        </div>
    );
};

function Services() {
    return (
        <section id="services" className={sectionClasses}>
            <ServiceItem
                image={graphicDesign}
                imageMobile={graphicDesignFormMobile}
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
            />
            <ServiceItem
                image={photography}
                imageMobile={photographyForMobile}
                title="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            />
        </section>
    );
}

export default Services;
