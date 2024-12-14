import React from 'react'
import "./Testimonials.css"
import thomas from "../../images/image-thomas.jpg"

function Testimonials() {
    return (
        <section className="testimonials">
            <h2 className='text-center text-2xl font-bold font-fraunces text-neutral-lightGrayishBlue uppercase tracking-[5px] py-16'>
                Client Testimonials</h2>

            <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="testimonial item flex flex-col items-center text-center gap-12">
                    <div className="testimonial-image">
                        <img src={thomas} alt="Thomas S." className='rounded-full w-20' />
                    </div>
                    <p className="testimonial-text text-[1.2rem] text-neutral-grayishBlue ">
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it
                        a satisfying and enjoyable experience.
                    </p>
                    <div className="testimonial-author">
                        <h3 className="testimonial-author-name font-fraunces text-[1.4rem] text-neutral-desaturatedBlue mb-2">Thomas S.</h3>
                        <h5 className="testimonial-author-role text-neutral-lightGrayishBlue">Chief Operating Officer</h5>
                    </div>
                </div>
                <div className="testimonial item flex flex-col items-center text-center gap-12">
                    <div className="testimonial-image">
                        <img src={thomas} alt="Thomas S." className='rounded-full w-20' />
                    </div>
                    <p className="testimonial-text text-[1.2rem] text-neutral-grayishBlue ">
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it
                        a satisfying and enjoyable experience.
                    </p>
                    <div className="testimonial-author">
                        <h3 className="testimonial-author-name font-fraunces text-[1.4rem] text-neutral-desaturatedBlue mb-2">Thomas S.</h3>
                        <h5 className="testimonial-author-role text-neutral-lightGrayishBlue">Chief Operating Officer</h5>
                    </div>
                </div>
                <div className="testimonial item flex flex-col items-center text-center gap-12">
                    <div className="testimonial-image">
                        <img src={thomas} alt="Thomas S." className='rounded-full w-20' />
                    </div>
                    <p className="testimonial-text text-[1.2rem] text-neutral-grayishBlue ">
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it
                        a satisfying and enjoyable experience.
                    </p>
                    <div className="testimonial-author">
                        <h3 className="testimonial-author-name font-fraunces text-[1.4rem] text-neutral-desaturatedBlue mb-2">Thomas S.</h3>
                        <h5 className="testimonial-author-role text-neutral-lightGrayishBlue">Chief Operating Officer</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;