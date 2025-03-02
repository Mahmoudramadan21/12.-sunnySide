import React from 'react';
import "./Testimonials.css";
import thomas from "../../images/image-thomas.jpg";

function Testimonials() {
    return (
        <section className="testimonials" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="testimonial-heading">Client Testimonials</h2>

            <div className="testimonial-container">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="testimonial-item" tabIndex="0">
                        <div className="testimonial-image">
                            <img src={thomas} alt="Thomas S." className="testimonial-img" loading='lazy' />
                        </div>
                        <p className="testimonial-text">
                            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it
                            a satisfying and enjoyable experience.
                        </p>
                        <div className="testimonial-author">
                            <h3 className="testimonial-author-name">Thomas S.</h3>
                            <h5 className="testimonial-author-role">Chief Operating Officer</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;