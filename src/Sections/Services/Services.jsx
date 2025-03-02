import React from 'react';
import "./Services.css";
import graphicDesign from '../../images/desktop/image-graphic-design.jpg';
import graphicDesignForMobile from '../../images/mobile/image-graphic-design.jpg';
import photography from '../../images/desktop/image-photography.jpg';
import photographyForMobile from '../../images/mobile/image-photography.jpg';

const ServiceItem = ({ image, imageMobile, title, description, textColor }) => {
    return (
        <div className="service-item" tabIndex="0">
            <picture>
                <source srcSet={imageMobile} media="(max-width: 480px)" />
                <img src={image} alt={title} className="service-img" loading='lazy' />
            </picture>
            <div className="service-info">
                <h3 className={`service-title ${textColor}`}>
                    {title}
                </h3>
                <p className={`service-description ${textColor}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

function Services() {
    return (
        <section id="services" className="services">
            <ServiceItem
                image={graphicDesign}
                imageMobile={graphicDesignForMobile}
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                textColor="text-primary-darkDesaturatedCyan"
            />
            <ServiceItem
                image={photography}
                imageMobile={photographyForMobile}
                title="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                textColor="text-primary-darkBlue"
            />
        </section>
    );
}

export default Services;