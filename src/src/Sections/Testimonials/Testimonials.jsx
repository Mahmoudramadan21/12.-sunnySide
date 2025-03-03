import React from 'react';
import "./Testimonials.css";
import thomas from "../../images/image-thomas.jpg";

// Define class variables
const sectionClasses = "testimonials";
const headingClasses = "text-center text-2xl font-bold font-fraunces text-neutral-lightGrayishBlue uppercase tracking-[5px] py-16";
const containerClasses = "mx-auto lg:px-24 md:px-12 px-3 grid grid-cols-1 md:grid-cols-3 gap-12";
const testimonialItemClasses = "testimonial item flex flex-col items-center text-center gap-12";
const testimonialImageClasses = "testimonial-image";
const testimonialTextClasses = "testimonial-text text-[1.1rem] max-w-[380px] text-neutral-grayishBlue";
const testimonialAuthorClasses = "testimonial-author";
const authorNameClasses = "testimonial-author-name font-fraunces text-[1.3rem] text-neutral-desaturatedBlue mb-2";
const authorRoleClasses = "testimonial-author-role text-[0.9rem] text-neutral-lightGrayishBlue";

function Testimonials() {
    return (
        <section className={sectionClasses}>
            <h2 className={headingClasses}>Client Testimonials</h2>

            <div className={containerClasses}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className={testimonialItemClasses}>
                        <div className={testimonialImageClasses}>
                            <img src={thomas} alt="Thomas S." className='rounded-full w-20' />
                        </div>
                        <p className={testimonialTextClasses}>
                            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it
                            a satisfying and enjoyable experience.
                        </p>
                        <div className={testimonialAuthorClasses}>
                            <h3 className={authorNameClasses}>Thomas S.</h3>
                            <h5 className={authorRoleClasses}>Chief Operating Officer</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
